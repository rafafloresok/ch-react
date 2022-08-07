import { useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import { UseDbContext } from "../context/DbContext";

import ItemList from "./ItemList";

import './ItemListContainer.css';

function ItemListContainer() {
    const {dbQueryCollection} = UseDbContext();
    const {id} = useParams();
    
    useEffect(() => {
        dbQueryCollection('items', id, 'category')
    },[id, dbQueryCollection]);
    
    return (
        <div className="itemListContainer">
            <ItemList/>         
        </div>
    );
}

export default memo(ItemListContainer)