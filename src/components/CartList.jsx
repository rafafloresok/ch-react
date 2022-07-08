import { useRef } from "react";
import { UseCartContext } from "../context/CartContext";

import CartItem from "./CartItem";
import CartForm from "./CartForm";

import './CartList.css';

export default function CartList() {
    const {cartList, totalPrice, clearCart} = UseCartContext();
    const cartFormCont = useRef();
    const endBtn = useRef();

    const showForm = () => {
        cartFormCont.current.style.display = 'block';
        endBtn.current.disabled = 'true';
        endBtn.current.style.cursor = 'default';
        endBtn.current.style.opacity = '0.5';
    }

    return (
        <div className="cartList">
            <h1 className="cartList__title">Su pedido:</h1>
            <ul className="cartList__list">
                {cartList.map((el) => <CartItem key={el.id} item={el}/>)}
            </ul>
            <p className="cartList__total-price">{`Costo total: $${totalPrice}`}</p>
            <hr />
            <button ref={endBtn} className="cartList__endBtn" onClick={showForm}>Finalizar compra</button>
            <button className="cartList__cleanBtn" onClick={clearCart}>Vaciar pedido</button>
            <hr />
            <div ref={cartFormCont} className="cartForm-container">
                <CartForm/>
            </div>
        </div>
    );
}