import Item from "./Item";
import './ItemList.css';

export default function ItemList({items, id}) {

    return (
        <div className="itemList">
            {id? 
                items.filter(el => el.categoria === id).map((el,index) => <Item key={el.id} el={el} index={index}/>)
                    :items.map((el,index) => <Item key={el.id} el={el} index={index}/>)
            }
        </div>
    );
}