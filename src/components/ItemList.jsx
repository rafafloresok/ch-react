import Item from "./Item";

import './ItemList.css';

export default function ItemList({items, category}) {
    return (
        <div className="itemList">
            {!items.length?
                <h1>Proximamente vas a poder disfrutar los mejores {category}!</h1>:
                items.map((item) => <Item key={item.id} item={item}/>)
            }
        </div>
    );
}