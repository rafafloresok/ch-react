import { useState } from 'react';
import './ItemCount.css';

export default function ItemCount({initial, stock, onAdd}) {
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
    function addItem() {
        onAdd(quantity);
    }

    return (
        <div className="itemCount">
            <button id='less' className="itemCount__minusBtn" onClick={decrease}>-</button>
            <span className="itemCount__quantity">{quantity}</span>
            <button id='plus' className="itemCount__plusBtn" onClick={increase}>+</button>
            <button className="itemCount__addToCartBtn" onClick={addItem}><i className="bi bi-bag-plus"></i></button>
        </div>
    );
}
