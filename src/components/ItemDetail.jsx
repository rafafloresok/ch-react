import { useState } from "react";
import ItemCount from "./ItemCount";
import BuyButtons from "./BuyButtons";
import './ItemDetail.css';

export default function ItemDetail({item, onAdd}) {
    const [inputType, setInputType] = useState('itemCount');

    function handleInputType() {
        setInputType('buyButtons');
    }

    return (
        <div className="itemDetail">
            <img className="itemDetail__img" src={item.img} alt="" />
            <div className='itemDetail__info'>
                <h3 className="itemDetail__title">{item.name}</h3>
                <p className="itemDetail__detail">{item.detail}</p>
                {inputType === 'itemCount' ? <ItemCount item={item} initial={1} stock={5} onAdd={onAdd} handleInputType={handleInputType}/>: <BuyButtons/>}
                
                {/* <p className='itemDetail__price'>{`Precio: $${item.price}`}</p> */}
                {/* <button className="itemDetail__addBtn" >Agregar al pedido</button> */}
            </div>
        </div>
    );
}