import { UseCartContext } from "../context/CartContext";

import CartItem from "./CartItem";
import CartForm from "./CartForm";

import './CartList.css';

export default function CartList({sendOrderManage}) {
    const {cartList, totalPrice} = UseCartContext();

    return (
        <div className="cartList">
            <h1 className="cart__title">Su pedido:</h1>
            {cartList.map((el) => <CartItem key={el.id} item={el}/>)}
            <p>{`Costo total: $${totalPrice}`}</p>
            <CartForm sendOrderManage={sendOrderManage}/>
        </div>
    );
}