import { UseCartContext } from "../context/CartContext";

import CartList from "./CartList";
import CartEmpty from "./CartEmpty";

import './Cart.css';

export default function Cart({toggleCart}) {
    const {totalItems} = UseCartContext();

    return (
        <>
            {totalItems?
                <CartList/>:
                <CartEmpty toggleCart={toggleCart}/>
            }
        </>
    );
}