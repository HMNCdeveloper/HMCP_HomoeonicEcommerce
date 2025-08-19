import { useSelector , useDispatch} from "react-redux";
import CartItems from "./cartItems";
import { XMarkIcon , ShoppingBagIcon} from "@heroicons/react/24/outline";
import { toggleCart } from '../stores/cart';
import { useEffect, useMemo } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useAuth } from '../context/AuthContext.jsx';
import { useFetch } from '../hooks/useFetch';

function CartTab({data}) {
  const { user, loginUser } = useAuth();
  const carts = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const isCartOpen = useSelector(state => state.cart.isCartOpen);
  const { fetchNow } = useFetch("paypal/webhook/", null, false, sessionStorage.getItem("access"));
  const total = useMemo(() => {
    if (!Array.isArray(carts) || !Array.isArray(data)) return 0;

    return carts.reduce((sum, item) => {
      const productDetails = data.find(p => p.product_id === item.product);
      if (!productDetails) return sum;

      const price = parseFloat(productDetails.price ?? 0);
      const quantity = Number(item.quantity ?? 0);
      if (isNaN(price) || isNaN(quantity)) return sum;
      const totalprice= (sum + price * quantity);
      return  totalprice;
    }, 0);
  }, [carts, data]);

  return (
    <div className={`fixed inset-0 z-50 flex justify-end transition-all duration-300 ease-in-out
      ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      
    >
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300
        ${isCartOpen ? 'opacity-50' : 'opacity-0'}`}
      />
      
      {/* Cart panel */}
      <div className={`relative flex flex-col w-full max-w-md h-full bg-white shadow-xl transform transition-transform duration-300
        ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Your Cart ({carts.length})</h2>
          <button className="p-1 text-gray-500 hover:text-gray-700 transition-colors" onClick={()=> dispatch(toggleCart())}>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        {/* Cart content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {carts.length > 0 ? (
            <ul className="divide-y divide-gray-100">
              {carts.map((item) => {
                const productDetails = data?.find(p => p.product_id === item.product);
               // console.log(productDetails);  // No funciona aya que no estoy mandando el producto desde el componente padre productsCatalogo, necesito una solucion
                return (
                  <CartItems 
                    key={`${item.product}-${item.variant || 'default'}`} 
                    data={item} 
                    details={productDetails} 
                  />
                );
              })}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBagIcon className="h-12 w-12 text-gray-300" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Your cart is empty</h3>
              <p className="mt-1 text-gray-500">Start adding products</p>
            </div>
          )}
        </div>
        
        {/* Summary and actions */}
        <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
          <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {total > 0 && carts.length > 0 && (
            <PayPalScriptProvider options={{ "client-id": "AdmkwlUmuhvKwv6z02RQw8h5kDLkWSBHriSn-Txi8tyTnQuII13NqQkx2E4e1t9M3HPWMVTvJWhbfe0H" }}>
              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [{
                      reference_id: "COMPANY_ID",
                      amount: {
                        currency_code: "USD",
                        value: total.toFixed(2), // total purchase amount
                        breakdown: {
                          item_total: {
                            currency_code: "USD",
                            value: total.toFixed(2) // items total sum
                          }
                        }
                      },
                      items: carts.map(item => ({
                        name: item.name || "Unnamed Product",
                        unit_amount: {
                          currency_code: "USD",
                          value: Number(item.unit_price).toFixed(2) // unit price
                        },
                        quantity: item.quantity.toString() || "1"
                      }))
                    }]
                  });
                }}

                onApprove={async (data, actions) => {
                  try {
                    const details = await actions.order.capture();
                    // alert(`Transaction completed by ${details.payer.name.given_name}`);
                    const preparedCartItems = carts.map(item => ({
                      product: item.product,       
                      quantity: item.quantity,
                      unit_price: item.unit_price?.toString() || "0",  
                      discount: item.discount !== undefined ? item.discount.toString() : "0", 
                      status: item.status || "pending"  
                    }));
                  
                    const payload = {
                      order_data: {
                        total_purchase: total.toFixed(2),
                        delivery_date: new Date().toISOString().split('T')[0],
                        status: 'pending',
                        tracking_number: 'N/A',
                        address: user.addresses[0]?.id || null,
                        cart_items_data: preparedCartItems
                      },
                      paypal_payment_data: {
                        order_id: data.orderID, 
                        payer_email: details.payer.email_address,
                        payer_id: data.payerID,
                        amount: details.purchase_units[0].amount.value,
                        status: details.status,
                        currency_code: details.purchase_units[0].amount.currency_code
                      }
                    };
                  //  console.log("Payload for order:", payload); 
                  await fetchNow( 'paypal/webhook/', payload, "POST");
                 //   console.log("Order sent to backend:", response);
                  
                  } catch (error) {
                  //  console.error("Error registering order:", error);
                    alert("Error saving the order.");
                  }
                }} 
              />
            </PayPalScriptProvider> ) }
          </div>
          
          <p className="mt-4 text-center text-sm text-gray-500">
            Need help?{" "}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartTab;
