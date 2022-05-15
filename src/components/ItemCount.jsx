import { useState } from 'react';
import { Link } from "react-router-dom";
import './ItemCount.css';

export default function ItemCount({id, initial, stock, onAdd}) {
    const [quantity, setQuantity] = useState(initial);

    function increase() {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        } 
    }

    function decrease() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } 
    }

    function addToCart() {
        onAdd(quantity);
    }

    return (
        <div className="itemCount">
            <button id='less' className="itemCount__minusBtn" onClick={decrease}>-</button>
            <span className="itemCount__quantity">{quantity}</span>
            <button id='plus' className="itemCount__plusBtn" onClick={increase}>+</button>
            <Link to={`/itemDetail/${id}`}>
                <button className="itemCount__addToCartBtn" onClick={addToCart}><i class="bi bi-bag-plus"></i></button>
            </Link>
        </div>
    );
}
