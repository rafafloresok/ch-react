import { UseCartContext } from "../context/CartContext";

import './CartItem.css';

export default function CartItem({item}) {
    const {clearItem} = UseCartContext();
    
    return (
        <li>Item: {item.name} - Precio: ${item.price} - Cantidad: {item.quantity} - <span className="cart__remove-icon" onClick={() => clearItem(item)}><i className="bi bi-bag-x-fill"></i></span></li>
    );
}