import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";

import './CartWidget.css';

export default function CartWidget() {
    const {totalItems} = UseCartContext();

    return (
        <Link to='/cart' style={{pointerEvents: !totalItems ? 'none' : ''}}>
            <div className='cartWidget' style={{opacity: !totalItems ? '0.5' : '1'}}>
                <span className="cartWidget__icon"><i className="bi bi-bag"></i></span>
                <span className="cartWidget__counter">{totalItems}</span>
            </div>
        </Link>
    );
}