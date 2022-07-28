import { useEffect, useRef } from "react";
import { UseCartContext } from "../context/CartContext";

import Cart from "./Cart";

import './CartWidget.css';

export default function CartWidget() {
    const {totalItems, toggleElement} = UseCartContext();
    const cart = useRef();

    const toggleCart = () => toggleElement(cart);

    useEffect(() => {
        cart.current.id = 'isOut';
    }, [])

    return (
        <>
            <div className='cartWidget' onClick={totalItems? toggleCart: undefined} style={{opacity: totalItems || '0.5', cursor: totalItems? 'pointer': 'default'}}>
                <span className="cartWidget__icon"><i className="bi bi-bag"></i></span>
                <span className="cartWidget__counter">{totalItems}</span>
            </div>
            <div ref={cart} className="cart">
                <Cart toggleCart={toggleCart}/>
            </div>
        </>
    );
}