import { useState } from 'react';
import itemImg from '../images/hamburguesa-de-cordero.jpg';
import './ItemCount.css';

export default function ItemCount({stock, initial, onAdd}) {
    const [quantity, addQuantity] = useState(initial);

    function increase() {
        if (quantity < stock) {
            addQuantity(quantity + 1);
        } 
    }

    function decrease() {
        if (quantity > 1) {
            addQuantity(quantity - 1);
        } 
    }

    return (
        <div className="itemCount">
            <img className="itemCount__img" src={itemImg} alt="" />
            <div className="itemCount__filter"></div>
            <div className="itemCount__info">
                <h2 className="itemCount__title">Hamburguesa de Cordero</h2>
                <button id='less' className="itemCount__minusBtn" onClick={decrease}>-</button>
                <span className="itemCount__quantity">{quantity}</span>
                <button id='plus' className="itemCount__plusBtn" onClick={increase}>+</button>
                <button className="itemCount__addToCartBtn" onClick={onAdd}><i class="bi bi-bag-plus"></i></button>
            </div>
        </div>
    );
}