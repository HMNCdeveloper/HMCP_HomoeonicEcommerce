import { useSelector , useDispatch} from "react-redux";
import CartItems from "./cartItems";
import { XMarkIcon , ShoppingBagIcon} from "@heroicons/react/24/outline";
import { toggleCart } from '../stores/cart';

function CartTab() {
  const carts = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const isCartOpen = useSelector(state => state.cart.isCartOpen);
  const total = carts.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  
  return (
    <div className={`fixed inset-0 z-50 flex justify-end transition-all duration-300 ease-in-out
      ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300
        ${isCartOpen ? 'opacity-50' : 'opacity-0'}`}
      />
      
      {/* Panel del carrito */}
      <div className={`relative flex flex-col w-full max-w-md h-full bg-white shadow-xl transform transition-transform duration-300
        ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Cabecera */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Tu Carrito ({carts.length})</h2>
          <button className="p-1 text-gray-500 hover:text-gray-700 transition-colors" onClick={()=> dispatch(toggleCart())}>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        {/* Contenido del carrito */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {carts.length > 0 ? (
            <ul className="divide-y divide-gray-100">
              {carts.map((item) => (
                <CartItems key={`${item.id}-${item.variant}`} data={item} />
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBagIcon className="h-12 w-12 text-gray-300" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Tu carrito está vacío</h3>
              <p className="mt-1 text-gray-500">Empieza a añadir productos</p>
            </div>
          )}
        </div>
        
        {/* Resumen y acciones */}
        <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
          <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            <button className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors">
              Finalizar Compra
            </button>
            <button className="flex items-center justify-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 shadow-sm hover:bg-indigo-50 transition-colors border-indigo-600">
              Seguir Comprando
            </button>
          </div>
          
          <p className="mt-4 text-center text-sm text-gray-500">
            ¿Necesitas ayuda?{" "}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartTab;
