import { useState } from "react";
import { UseCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import BuyButtons from "./BuyButtons";
import './ItemDetail.css';

export default function ItemDetail({item}) {
    const [inputType, setInputType] = useState('itemCount');
    const {qtyInCart, addToCart, checkStock} = UseCartContext();

    function onAdd(quantity) {
        addToCart({...item, quantity})
        setInputType('buyButtons');
    }

    return (
        <div onLoad={() => {checkStock(item)}} className="itemDetail">
            <img className="itemDetail__img" src={item.img} alt="" />
            <div className='itemDetail__info'>
                <h3 className="itemDetail__title">{item.name}</h3>
                <p className="itemDetail__detail">{item.detail}</p>
                {inputType === 'itemCount' ?
                    <ItemCount stock={item.stock - qtyInCart} onAdd={onAdd}/>:
                    <BuyButtons/>}
            </div>
        </div>
    );
}