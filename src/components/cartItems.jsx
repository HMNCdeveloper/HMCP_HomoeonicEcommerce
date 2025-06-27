import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';

const products = [
  { id: 1, name: 'Product 1', price: '10', description: 'This is product 1' },
  { id: 2, name: 'Product 2', price: '20', description: 'This is product 2' },
  { id: 3, name: 'Product 3', price: '30', description: 'This is product 3' },
  { id: 4, name: 'Product 4', price: '40',  description: 'This is product 4' },
]
// Funcion para mostrar los items del carrito
// y sus detalles como nombre, precio y cantidad
const CartItems =(props) => {
  const { id, quantity } = props.data;
  const [details, setDetails] = useState([]);
  const dispatch=useDispatch();

//useEffect para buscar los detalles del producto
  useEffect(() => {
    const findDetails = products.find(p => p.id === id);
    setDetails(findDetails);
  }, [id]);
  
  const handleMinQuantity = () => {
    dispatch(changeQuantity({ id: id, quantity: quantity - 1 }));
  }

const handlePlusQuantity = () => {
    dispatch(changeQuantity({ id: id, quantity: quantity + 1 }));
  }

  console.log(details);


  return (
    <div className='flex justify-b items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 '>
        <img src="/product.png" className="w-12"/>
        <h3> {details.name}</h3>
        <p>${details.price * quantity}</p>
      
    <div className='w-20 flex justify-between'>
    <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleMinQuantity}>-</button>
    <span> {quantity}</span>
    <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handlePlusQuantity}>+</button>

    </div>
    </div>
  );
}

export default CartItems;