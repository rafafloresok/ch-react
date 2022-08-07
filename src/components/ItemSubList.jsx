import { UseDbContext } from "../context/DbContext";

import Item from "./Item";

import './ItemSubList.css';

export default function ItemList({item}) {
    const {items} = UseDbContext();
    
    return (
        <div className="subList">
            <div className="subList__title-container">
                <h2 className="subList__title">{item}</h2>
            </div>
            <div className="subList__items-container">
                {items.map(function(el) {return(el.category===item && <Item key={el.id} item={el}/>)})}
            </div>
        </div>
    );
}