import { UseCartContext } from "../context/CartContext";

import CartItem from "./CartItem";
import CartForm from "./CartForm";

import './CartList.css';

export default function CartList() {
    const {cartList, totalPrice} = UseCartContext();

    return (
        <div className="cartList">
            <h1 className="cartList__title">Su pedido:</h1>
            <ul className="cartList__list">
                {cartList.map((el) => <CartItem key={el.id} item={el}/>)}
            </ul>
            <p className="cartList__total-price">{`Costo total: $${totalPrice}`}</p>
            <hr />
            <CartForm/>
        </div>
    );
}