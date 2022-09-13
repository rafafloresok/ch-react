import { useEffect, useRef } from "react";
import { UseCartContext } from "../context/CartContext";
import { toggleElement } from "../helpers/helpers";

import Cart from "./Cart";

import './CartWidget.css';

export default function CartWidget() {
    const {totalItems} = UseCartContext();
    const cart = useRef();

    const toggleCart = () => toggleElement(cart);

    useEffect(() => {
        cart.current.id = 'isOut';
    }, [])

    return (
        <>
            <div className={`cartWidget cartWidget--${totalItems? 'filled': 'empty'}`} onClick={() => {totalItems && toggleCart()}}>
                <span className="cartWidget__icon"><i className="bi bi-bag"></i></span>
                <span className="cartWidget__counter">{totalItems}</span>
            </div>
            <div ref={cart} className="cart">
                <Cart toggleCart={toggleCart}/>
            </div>
        </>
    );
}