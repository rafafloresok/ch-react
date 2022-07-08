import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dbQueryCollection } from "../js/functions";

import ItemList from "./ItemList";
import Loader from "./Loader";

import './ItemListContainer.css';

export default function ItemListContainer() {
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        dbQueryCollection('items', id, 'category', setItems, setLoader);
    },[id]);
    
    return (
        <div className="itemListContainer">
            {loader?
                <Loader/>:
                <ItemList items={items}/>
            }
        </div>
    );
}