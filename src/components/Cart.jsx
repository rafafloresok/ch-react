import { useState } from "react";
import { UseCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import './Cart.css';

export default function Cart() {
    const {cartList, clearCart} = UseCartContext();
    const [update, setUpdate] = useState();

    function itemRemoved(name) {
        setUpdate(`${name} removed`);
    }
    console.log(update);
    
    return (
        <div className="cart">
            <h1 className="cart__title">Su pedido:</h1>
            {cartList.map(el => <CartItem key={el.id} item={el} itemRemoved={itemRemoved}/>)}
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    );
}