import { useState, useEffect } from "react";
import { UseCartContext } from "../context/CartContext";

import ItemSubList from "./ItemSubList";

import './ItemList.css';

export default function ItemList() {
    const {items} = UseCartContext();
    const [categories, setCategories] = useState([]);

    useEffect ((() => {
        setCategories([...(new Set (items.map((item) => item.category)))])
    }),[items])
    
    return (
        <div className="itemList">
            {!items.length?
                <h1 className="itemList__empty-list-message">
                    Proximamente vas a poder disfrutar esta nueva especialidad!
                </h1>:
                <>
                    {categories.map((item) => <ItemSubList key={item} item={item}/>)}
                </>
            }
        </div>
    );
}