// import {useState, useEffect} from 'react';
// import { useDispatch } from 'react-redux';
// import { changeQuantity } from '../stores/cart';

// // Funcion para mostrar los items del carrito
// // y sus detalles como nombre, precio y cantidad
// const CartItems =(props) => {
//   const { id, quantity } = props.data;
//   const [details, setDetails] = useState([]);
//   const dispatch=useDispatch();

// //useEffect para buscar los detalles del producto
//   useEffect(() => {
//     const findDetails = products.find(p => p.id === id);
//     setDetails(findDetails);
//   }, [id]);
  
//   const handleMinQuantity = () => {
//     dispatch(changeQuantity({ id: id, quantity: quantity - 1 }));
//   }

// const handlePlusQuantity = () => {
//     dispatch(changeQuantity({ id: id, quantity: quantity + 1 }));
//   }
//   return (
//     <div className='flex justify-b items-center p-2  gap-5 '>
//         <img src="/product.png" className="w-12"/>
//         <h3> {details.name}</h3>
//         <p>${details.price * quantity}</p>
      
//     <div className='w-20 flex justify-between ml-auto mr-10'>
//       <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleMinQuantity}>-</button>
//       <span> {quantity}</span>
//       <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handlePlusQuantity}>+</button>  
//     </div>
//     </div>
//   );
// }

// export default CartItems;

import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';

const CartItems = (props) => {
  const { data, details } = props;  // Desestructura los datos y detalles
  // console.log ('CartItems data:', data);
  // console.log ('CartItems details:', details);
  const dispatch = useDispatch();

  const handleMinQuantity = () => {
    dispatch(changeQuantity({ product: data.product, quantity: data.quantity - 1 }));
  };

  const handlePlusQuantity = () => {
    dispatch(changeQuantity({ product: data.product, quantity: data.quantity + 1 }));
  };

  // Usa details directamente, sin buscar
  return (
    <div className='flex justify-b items-center p-2 gap-5'>
      <img src="/product.png" className="w-12" />
      <h3>{details?.product_name || 'Producto no encontrado'}</h3>
      <p>${(details?.price || 0) * data.quantity}</p>

      <div className='w-20 flex justify-between ml-auto mr-10'>
        <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleMinQuantity}>-</button>
        <span>{data.quantity}</span>
        <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handlePlusQuantity}>+</button>
      </div>
    </div>
  );
};

export default CartItems;