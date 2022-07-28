import { Link } from "react-router-dom";

import './Item.css';

export default function Item({item}) {
    const {img, stock, category, name, price, id} = item;

    return (
        <div className="item">
            <img className="item__img" src={img} alt="" style={{filter: stock <= 0 && 'grayscale(100%)'}}/>
            <div className='item__filter'></div>
            <div className='item__info'>
                <p className='item__category'>{category}</p>
                <h3 className="item__title">{name}</h3>
                <p className='item__price'>{`Precio: $${price}`}</p>
                <Link to={`/itemDetail/${id}`} style={{pointerEvents: stock <= 0 && 'none'}}>
                    <button className="item__addBtn" >{stock <= 0 ? 'No disponible' : 'Ver detalle'}</button>
                </Link>
            </div>
        </div>
    );
}