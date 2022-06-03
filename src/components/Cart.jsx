import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";
import CartList from "./CartList";
import './Cart.css';

export default function Cart() {
    const {totalItems, orderId} = UseCartContext();
    
    if (!totalItems) {
        return (
            <div className="cart">
                {orderId ? <h1>Pedido enviado! Nro de pedido: {orderId}</h1> : <h1>El pedido está vacío</h1>}
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
