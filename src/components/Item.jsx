//import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import './Item.css';

export default function Item({el}) {

    return (
        <div className="item">
            <img className="item__img" src={el.img} alt="" />
            <div className="item__filter"></div>
            <div className='item__info'>
                <p className='item__category'>{el.categoria}</p>
                <h3 className="item__title">{el.name}</h3>
                <p className='item__price'>{`Precio: $${el.price}`}</p>
                <Link to={`/itemDetail/${el.id}`}>
                    <button className="item__addBtn" >Agregar al pedido</button>
                </Link>
                {/* <ItemCount id={el.id} initial={1} stock={5} onAdd={(quantity)=>console.log(`${quantity} unidad/es agregada/s al pedido`)}/> */}
            </div>
        </div>
    );
}