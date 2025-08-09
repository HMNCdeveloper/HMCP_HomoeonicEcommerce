import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaInfoCircle } from 'react-icons/fa';
import { addToCart } from '../stores/cart';
import { useAuth } from '../context/AuthContext';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleAddCart = (e) => {
    e.stopPropagation();
    user ?
      dispatch(addToCart({
        product: product.product_id,
        quantity: 1,
        unit_price: product.price,
        name: product.product_name
      })) : alert('Please log in to add products to the cart');
  };

  return (
    <div className="group bg-white p-5 rounded-2xl shadow-lg flex flex-col h-full hover:shadow-xl transition-shadow cursor-pointer relative">
      {/* Link for details using the card info */}
      <Link
        to={`/product/${product.product_id}`}
        className="absolute inset-0 z-10"
        aria-label={`View details of ${product.product_name}`}
      />
      
      {/* Image container */}
      <div className="relative mb-4 h-48 overflow-hidden rounded-lg bg-gray-100">
        <img 
          src="/product.png" 
          alt={product.product_name} 
          className="w-full h-full object-contain transition-transform duration-300 transform group-hover:scale-105"
        />
      </div>

      <div className="flex-grow flex flex-col">
        {/* Product details */}
        <div className="px-2">
          <h3 className="text-center text-lg font-semibold h-14 mb-3 line-clamp-2 flex items-center justify-center text-gray-800">
            {product.product_name}
          </h3>
          <div className="text-right mb-2">
            <Link
              to={`/product/${product.product_id}`} 
              className="inline-flex items-center text-sm text-gray-500 hover:text-[#1F7A8C] transition-colors"
            >
              <FaInfoCircle className="mr-1" /> More details
            </Link>
          </div>
        </div>
        
        {/* Add to cart button */}
        <div className="mt-auto">
          <div className="flex justify-between items-center px-2">
            <span className="text-lg font-bold text-gray-800">${product.price}</span>
            <button 
              className="bg-[#1F7A8C] hover:bg-[#1F7A8C]/80 py-2 px-3 rounded-md text-sm font-bold text-white flex items-center gap-2 transition-colors z-20 relative"
              onClick={handleAddCart} 
            >
              <FaShoppingCart className="w-4"/>
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
