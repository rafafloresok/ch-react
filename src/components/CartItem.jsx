import { UseCartContext } from "../context/CartContext";
import { UseDbContext } from "../context/DbContext";

import './CartItem.css';

export default function CartItem({item}) {
    const {clearItem} = UseCartContext();
    const {setOrderId} = UseDbContext();

    const {name, quantity, price} = item;

    const handleClearItem = () => {
        setOrderId('');
        clearItem(item);
    }
    
    return (
        <li className="cartItem">
            <span className="cartItem__name">{name}</span>
            <span className="cartItem__quantity">Cantidad: {quantity}</span>
            <span className="cartItem__subtotal">Subtotal: ${price*quantity}</span>
            <span className="cartItem__remove-icon" onClick={handleClearItem}><i className="bi bi-bag-x-fill"></i></span>
            <hr />
        </li>
    );
}