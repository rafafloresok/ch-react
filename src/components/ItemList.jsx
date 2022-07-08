import Item from "./Item";

import './ItemList.css';

export default function ItemList({items}) {
    return (
        <div className="itemList">
            {!items.length?
                <h1 className="itemList__empty-list-message">Proximamente vas a poder disfrutar una nueva especialidad!</h1>:
                items.map((item) => <Item key={item.id} item={item}/>)
            }
        </div>
    );
}