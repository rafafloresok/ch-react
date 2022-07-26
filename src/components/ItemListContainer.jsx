import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";

import ItemList from "./ItemList";

import './ItemListContainer.css';

export default function ItemListContainer() {
    const {dbQueryCollection} = UseCartContext();
    const {id} = useParams();

    useEffect(() => {
        dbQueryCollection('items', id, 'category');
    },[id]);
    
    return (
        <div className="itemListContainer">
            <ItemList/>         
        </div>
    );
}