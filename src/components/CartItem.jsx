import { UseCartContext } from "../context/CartContext";

import './CartItem.css';

export default function CartItem({item}) {
    const {clearItem} = UseCartContext();
    
    return (
        <li className="cartItem">
            <span className="cartItem__name">{item.name}</span>
            <span className="cartItem__quantity">Cantidad: {item.quantity}</span>
            <span className="cartItem__subtotal">Subtotal: ${item.price*item.quantity}</span>
            <span className="cartItem__remove-icon" onClick={() => clearItem(item)}><i className="bi bi-bag-x-fill"></i></span>
            <hr />
        </li>
    );
}