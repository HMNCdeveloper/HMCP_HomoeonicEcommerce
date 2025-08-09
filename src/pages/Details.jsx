import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaShoppingCart, FaShare, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { addToCart } from '../stores/cart';
import { useAuth } from '../context/AuthContext';

const Details = ({ productData }) => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState('features');
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    const findDetail = productData.find((p) => p.product_id === parseInt(id));
    setDetails(findDetail);
    setActiveImage(0);
    setQuantity(1);
    setTab('features');
  }, [id, productData]);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (!details) return;
    { user ?  
      dispatch(addToCart({ id: details.product_id, quantity })) 
      : alert("Please log in before adding items to the cart") }
  };

  if (!details) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse rounded-full bg-gray-200 h-12 w-12"></div>
      </div>
    );
  }

  const featuresArray = details.product_details
    ? details.product_details.split(',').map((f) => f.trim())
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Product Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-cyan-50">
          <h1 className="text-3xl font-bold text-gray-900">{details.product_name}</h1>
          <div className="flex items-center mt-1">
            <span className="text-2xl font-bold text-blue-600">${details.price}</span>
            {/* {details.stock && details.stock > 0 ? (
              // <span className="ml-3 px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
              //   {details.stock} in stock
              // </span>
            ) : (
              <span className="ml-3 px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                Out of stock
              </span>
            )} */}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Gallery Section */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-w-1 aspect-h-1">
              <img
                src={
                  details.images && details.images.length > 0
                    ? details.images[activeImage].url_image
                    : '/default-image.png'
                }
                alt={details.product_name}
                className="w-full h-full object-contain"
              />
              {details.stock && details.stock > 0 && (
                <div className="absolute top-3 right-3 flex items-center gap-1">
                  <FiMinus
                    size={24}
                    className="text-white p-1 bg-black/30 rounded cursor-pointer hover:bg-black/50"
                    onClick={() => setQuantity((p) => Math.max(1, p - 1))}
                  />
                  <span className="px-2 bg-white rounded text-sm font-medium">{quantity}</span>
                  <FiPlus
                    size={24}
                    className="text-white p-1 bg-black/30 rounded cursor-pointer hover:bg-black/50"
                    onClick={() => setQuantity((p) => p + 1)}
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3">
              {details.images &&
                details.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`rounded-lg overflow-hidden border-2 ${
                      activeImage === index ? 'border-blue-500' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={img.url_image}
                      alt={`View ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </button>
                ))}
            </div>
          </div>

          {/* Details Section */}
          <div>
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setTab('features')}
                className={`px-4 py-2 font-medium ${
                  tab === 'features' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => setTab('description')}
                className={`px-4 py-2 font-medium ${
                  tab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
                }`}
              >
                Description
              </button>
            </div>

            <div className="mt-6">
              {tab === 'features' ? (
                <ul className="space-y-3">
                  {featuresArray.length > 0 ? (
                    featuresArray.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))
                  ) : (
                    <p className="text-gray-700">No features available.</p>
                  )}
                </ul>
              ) : (
                <p className="text-gray-700 leading-relaxed">{details.product_description}</p>
              )}
            </div>

            {/* Actions */}
            <div className="mt-8 space-y-4">
              <div className="flex space-x-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                >
                  <FaShoppingCart />
                  <span>Add to cart</span>
                </button>
                <button className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors">
                  <FaShare className="text-gray-600" />
                </button>
              </div>

              {/* Share options */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">Share:</span>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <FaFacebook size={20} />
                  </a>
                  <a href="#" className="text-green-500 hover:text-green-700">
                    <FaWhatsapp size={20} />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <MdEmail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
