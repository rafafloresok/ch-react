import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";

import ItemList from "./ItemList";

import './ItemListContainer.css';

export default function ItemListContainer() {
    const {contDbQueryCollection, contItems} = UseCartContext();
    const {id} = useParams();

    useEffect(() => {
        contDbQueryCollection('items', id, 'category');
    },[id]);

    
    return (
        <div className="itemListContainer">
            {contItems.length && <ItemList items={contItems}/>}           
        </div>
    );
}