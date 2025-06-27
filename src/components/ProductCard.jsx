import {useSelector, useDispatch} from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa'
import { addToCart } from '../stores/cart';
function ProductCard({ product }) {
  const carts= useSelector(state => state.cart.items);
  console.log(carts);
  const dispatch = useDispatch();

  // Accion para agregar un producto al carrito
  const handleAddCart = () => {
    dispatch(addToCart({
      id: product.id,
      quantity: 1,
    }));
  }
  return (
    <div className='product-card'>
   
            <div key={product.id} className='bg-white p-5 rounded-xl shadow-sm'>
              <img src="/product.png" className="w-full n-80 object-cover object-top drop-shadow-[0_10px_10px_#0006]"/>
              <div className="flex justify-center mb-4">
                <h3>{product.name}</h3>
                </div>
                <div className="flex justify-between items-center mb-4">
                <span>{product.price}</span>
                <button className="bg-yellow-300 p-2 rounded-md text-sm font-bold hover:bh items-center flex gap-2" onClick={handleAddCart}>
                  <FaShoppingCart className='w-5'/>Add to Cart</button>
              </div>
            </div>
    </div>
  )
}
export default ProductCard
