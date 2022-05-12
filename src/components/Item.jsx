import ItemCount from "./ItemCount";
import './Item.css';

export default function Item({categoria, name, price, img,}) {

    return (
        <div className="item">
            <img className="item__img" src={img} alt="" />
            <div className="item__filter"></div>
            <div className='item__info'>
                <p className='item__category'>{categoria}</p>
                <h3 className="item__title">{name}</h3>
                <p className='item__price'>{`Precio: $${price}`}</p>
                <ItemCount initial={1} stock={5} onAdd={(quantity)=>console.log(`${quantity} unidad/es agregada/s al pedido`)}/>
            </div>
        </div>
    );
}