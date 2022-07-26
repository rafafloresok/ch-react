import { useState, useEffect } from "react";
import { UseCartContext } from "../context/CartContext";

import ItemCount from "./ItemCount";
import BuyButtons from "./BuyButtons";

import './ItemDetail.css';

export default function ItemDetail() {
    const [inputType, setInputType] = useState('itemCount');
    const {qtyInCart, addToCart, checkQtyInCart, detailedItem} = UseCartContext();

    const onAdd = (quantity) => {
        addToCart({...detailedItem, quantity})
        setInputType('buyButtons');
    }

    useEffect(() => {
        checkQtyInCart(detailedItem);
    });

    return (
        <div className="itemDetail">
            <div className="itemDetail__mask"></div>
            <img className="itemDetail__img" src={detailedItem.img} alt="" />
            <div className='itemDetail__info'>
                <h3 className="itemDetail__title">{detailedItem.name}</h3>
                <p className="itemDetail__price">${detailedItem.price}</p>
                <p className="itemDetail__detail">{detailedItem.detail}</p>
                {inputType === 'itemCount'?
                    <ItemCount item={detailedItem} currentStock={detailedItem.stock - qtyInCart} onAdd={onAdd}/>:
                    <BuyButtons/>
                }
            </div>
        </div>
    );
}