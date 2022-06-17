import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";

import './CartEmpty.css';

export default function CartList() {
    const {orderId} = UseCartContext();

    return (
        <div className="cartEmpty">
                {orderId ? <h1>Pedido enviado! Nro de pedido: {orderId}</h1> : <h1>El pedido está vacío</h1>}
                <Link to='/'>
                    <button>Volver al menú</button>
                </Link>
            </div>
    );
}