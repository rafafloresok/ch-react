import { UseDbContext } from "../context/DbContext";

import './CartEmpty.css';

export default function CartList({toggleCart}) {
    const {orderId} = UseDbContext();

    return (
        <div className="cartEmpty">
            {orderId?
                <h1 className="cartEmpty__title">Pedido enviado! <br/> Nro de pedido: {orderId}</h1>:
                <h1 className="cartEmpty__title">El pedido está vacío</h1>
            }
            <button onClick={toggleCart} className="cartEmpty__button">Cerrar</button>
        </div>
    );
}