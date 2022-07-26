import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";

import ItemDetail from "./ItemDetail";

import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
    const {dbQueryDoc} = UseCartContext();
    const {id} = useParams();

    useEffect(() => {
        dbQueryDoc('items',id);
    },[id]);

    return (
        <div className="itemDetailContainer">
            <ItemDetail/>
        </div>
    );
}