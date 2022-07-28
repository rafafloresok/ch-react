import { UseCartContext } from "../context/CartContext";

import './Toast.css';

export default function Toast() {
    const {detailedItem, addedQty} = UseCartContext();

    return (
        <span className="toast">
            {`Agregada${addedQty>1 ? 's' : ''} ${addedQty} unidad${addedQty>1 ? 'es' : ''} de ${detailedItem.name}`}
        </span>
    );
}