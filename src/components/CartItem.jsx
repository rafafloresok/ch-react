import { UseCartContext } from "../context/CartContext";
import './CartItem.css';

export default function CartItem({item, itemRemoved}) {
    const {clearItem} = UseCartContext();

    function removeItem() {
        clearItem(item.id)
        itemRemoved(item.name);
    }
    
    return (
        <li>Item: {item.name} - Cantidad: {item.quantity} - <span className="cart__remove-icon" onClick={removeItem}><i className="bi bi-bag-x-fill"></i></span></li>
    );
}