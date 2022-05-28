import Item from "./Item";
import './ItemList.css';

export default function ItemList({items}) {
    return (
        <div className="itemList">
            {items.map((el) => <Item key={el.id} el={el}/>)}
        </div>
    );
}