import { UseCartContext } from "../context/CartContext";

import CartList from "./CartList";
import CartEmpty from "./CartEmpty";

import './Cart.css';

export default function Cart() {
    const {totalItems/* , orderId */} = UseCartContext();
    
    if (!totalItems) {
        return (
            <div className="cart">
                <CartEmpty />
            </div>
        );
    }

    return (
        <div className="cart">
            <CartList/>
        </div>
    );
}