import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";
import CartList from "./CartList";
import './Cart.css';

export default function Cart() {
    const {totalItems} = UseCartContext();
    
    if (!totalItems) {
        return (
            <div className="cart">
                <h1>El pedido está vacío</h1>
                <Link to='/'>
                    <button>Volver al menú</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <CartList/>
        </div>
    );
}
