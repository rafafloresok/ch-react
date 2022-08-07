import { useState, useEffect } from "react";
import { UseCartContext } from "../context/CartContext";
import { UseDbContext } from "../context/DbContext";

import ItemCount from "./ItemCount";
import BuyButtons from "./BuyButtons";

import './ItemDetail.css';

export default function ItemDetail() {
    const [inputType, setInputType] = useState('itemCount');
    const {qtyInCart, addToCart, checkQtyInCart} = UseCartContext();
    const {detailedItem} = UseDbContext();
    const {img, name, price, detail, stock} = detailedItem;

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
            <img className="itemDetail__img" src={img} alt="" />
            <div className='itemDetail__info'>
                <h3 className="itemDetail__title">{name}</h3>
                <p className="itemDetail__price">${price}</p>
                <p className="itemDetail__detail">{detail}</p>
                {inputType === 'itemCount'?
                    <ItemCount item={detailedItem} currentStock={stock - qtyInCart} onAdd={onAdd}/>:
                    <BuyButtons/>
                }
            </div>
        </div>
    );
}