import { UseCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import './Cart.css';

export default function Cart() {
    const {cartList, clearCart, totalPrice} = UseCartContext();
    
    return (
        <div className="cart">
            <h1 className="cart__title">Su pedido:</h1>
            {cartList.map(el => <CartItem key={el.id} item={el}/>)}
            <button onClick={clearCart}>Vaciar carrito</button>
            <span>{`Costo total: ${totalPrice}`}</span>
        </div>
    );
}
