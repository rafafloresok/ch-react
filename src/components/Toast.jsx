import { UseCartContext } from "../context/CartContext";

import './Toast.css';

export default function Toast() {
    const {addedItem} = UseCartContext();
    const {quantity, name} = addedItem;

    return (
        <span className="toast">
            {`Agregada${quantity>1 ? 's' : ''} ${quantity} unidad${quantity>1 ? 'es' : ''} de ${name}`}
        </span>
    );
}