import { useState } from 'react';
import itemImg from '../images/hamburguesa-de-cordero.jpg';
import './ItemCount.css';


export default function ItemCount({stock, initial}) {
    const [quantity, addQuantity] = useState(initial);

    function onAdd() {
        if (quantity === stock) {
            console.log("sin stock");
        } else {
            addQuantity(quantity + 1);
        } 
    }

    function onLess() {
        if (quantity === 1) {
            console.log("cantidad minima");
        } else {
            addQuantity(quantity - 1);
        } 
    }

    return (
        <div className="itemCount">
            <img className="itemCount__img" src={itemImg} alt="" />
            <div className="itemCount__filter"></div>
            <div className="itemCount__info">
                <h2 className="itemCount__title">Hamburguesa de Cordero</h2>
                <button id='less' className="itemCount__minusBtn" onClick={onLess}>-</button>
                <span className="itemCount__quantity">{quantity}</span>
                <button id='plus' className="itemCount__plusBtn" onClick={onAdd}>+</button>
                <button className="itemCount__addToCartBtn"><i class="bi bi-bag-plus"></i></button>
            </div>
        </div>
    );
}