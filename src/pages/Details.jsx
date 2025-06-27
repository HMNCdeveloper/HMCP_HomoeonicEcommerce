import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart"; 
import { useSelector } from "react-redux";
const products = [
    { id: 1, name: 'Product 1', price: '$10', description: 'This is product 1' },
    { id: 2, name: 'Product 2', price: '$20', description: 'This is product 2' },
    { id: 3, name: 'Product 3', price: '$30', description: 'This is product 3' },
    { id: 4, name: 'Product 4', price: '$40',  description: 'This is product 4' },
]
const Details = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const dispatch = useDispatch();
    // Acceso al estado del carrito
    const carts= useSelector(state => state.cart.items);
    // Agregar o disminuir cantidad de producto en la compra
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
        };
        
    const decreaseQuantity = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
        };

    useEffect(() => {
        const findDetail = products.find(p => p.id === parseInt(id));
        setDetails(findDetail);
    }, [id]);

    if (!details) {
        return <div>Loading...</div>;
    }


    console.log(carts);

    const handleAddToCart = () => {
        console.log('Adding to cart:', details.name, 'Quantity:', quantity);
        dispatch(addToCart({ 
            id: details.id,
            quantity: quantity, }));
        };

    return (
        <div>
            <h2 className="text-3xl text-center"> PRODUCT DETAIL</h2>   
            <div className="grid grid-cols-2 gap-5 mt-5">
                <div>
                    <img src="/product.png" alt={details.name} className="w-full"/>
                </div> 
            <div className="flex flex-col gap-5 ">     
                <h1 className="text-4xl font-bold mb-6">{details.name}</h1>
                <p className="mb-4">Price: {details.price}</p>
            <div className="flex gap-5">
                <div className="flex gap-2 justify-center items-center">
                    <button className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center" onClick={decreaseQuantity}>-</button>
                    <span className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">{quantity}</span>
                    <button className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"  onClick={increaseQuantity}>+</button>
                </div>   
                <button className="bg-yellow-300 text-black px-7 py-3 rounded-xl shadow-2xl flex items-center gap-2" onClick={handleAddToCart}>
                <FaShoppingCart/>    Add to Cart
            </button> 
            </div> 
            <p>{details.description}</p>
        </div>
        </div>
        </div>
    );
}
export default Details;