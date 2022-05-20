import { useState } from "react";
import { UseCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import BuyButtons from "./BuyButtons";
import './ItemDetail.css';

export default function ItemDetail({item}) {
    const [inputType, setInputType] = useState('itemCount');
    //const [quantityToAdd,setQuantityToAdd] = useState();
    const {addToCart, cartList} = UseCartContext();
    
    function onAdd(quantity, name) {
        //setQuantityToAdd(quantity)
        console.log(`${quantity} unidad/es de ${name} agregada/s al pedido`);
        addToCart({item, quantity})
    }
    function handleInputType() {
        setInputType('buyButtons');
    }

    console.log(cartList);

    return (
        <div className="itemDetail">
            <img className="itemDetail__img" src={item.img} alt="" />
            <div className='itemDetail__info'>
                <h3 className="itemDetail__title">{item.name}</h3>
                <p className="itemDetail__detail">{item.detail}</p>
                {inputType === 'itemCount' ?
                    <ItemCount item={item} initial={1} stock={5} onAdd={onAdd} handleInputType={handleInputType}/>:
                    <BuyButtons/>}
            </div>
        </div>
    );
}