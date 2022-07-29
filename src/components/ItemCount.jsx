import { useRef } from 'react';

import './ItemCount.css';

export default function ItemCount({currentStock, onAdd}) {
    const itemCountQty = useRef();

    const increase = () => {
        (itemCountQty.current.textContent < currentStock) && (itemCountQty.current.textContent++)
    };
    const decrease = () => {
        (itemCountQty.current.textContent > 1) && (itemCountQty.current.textContent--)
    };

    return (
        <div className="itemCount">
            <button
                id='less'
                className="itemCount__minusBtn"
                onClick={decrease}
                style={{pointerEvents: currentStock <= 0 && 'none', opacity: currentStock <= 0 && '0.5'}}
                >
                -
            </button>
            <span
                ref={itemCountQty}
                className="itemCount__quantity"
                style={{opacity: currentStock <= 0 && '0.5'}}
                >
                1
            </span>
            <button
                id='plus'
                className="itemCount__plusBtn"
                onClick={increase}
                style={{pointerEvents: currentStock <= 0 && 'none', opacity: currentStock <= 0 && '0.5'}}
                >
                +
            </button>
            <button
                className="itemCount__addToCartBtn"
                onClick={() => onAdd(Number(itemCountQty.current.textContent))}
                style={{pointerEvents: currentStock <= 0 && 'none', opacity: currentStock <= 0 && '0.5'}}
                >
                <i className="bi bi-bag-plus"></i>
            </button>
        </div>
    );
}
