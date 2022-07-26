import { useState, useEffect } from "react";
import { UseCartContext } from "../context/CartContext";

import Item from "./Item";

import './ItemList.css';

export default function ItemList() {
    const {items} = UseCartContext();
    const [categories, setCategories] = useState([]);

    useEffect ((() => {
        setCategories(items.map((item) => item.category).filter((item, i, items) => item !== items[i-1]))
    }),[items])
    
    return (
        <div className="itemList">
            {!items.length?
                <h1 className="itemList__empty-list-message">Proximamente vas a poder disfrutar esta nueva especialidad!</h1>:
                <>
                    {categories.map((item) => 
                        <div key={item.id} className="subList">
                            <div className="subList__title-container">
                                <h2 className="subList__title">{item}</h2>
                            </div>
                            <div className="subList__items-container">
                                {items.map(function(el) {return(el.category===item && <Item key={el.id} item={el}/>)})}
                            </div>
                        </div>
                    )}
                </>
            }
        </div>
    );
}