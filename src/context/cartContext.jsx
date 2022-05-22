import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function UseCartContext() {
    return useContext(cartContext)
}

export default function CartContextProv({children}) {
    const [cartList, setCartList] = useState([]);

    function isInCart(id) {
        return cartList.some(el => el.id === id);
    }
    function addToCart(item) {
        if (isInCart(item.id)) {
            let i = cartList.findIndex(el => el.id === item.id);
            const newCartList = cartList;
            newCartList[i].quantity += item.quantity;
            setCartList(newCartList);
        } else {
            setCartList([
                ...cartList,
                item]);
        }
    }
    function clearCart() {
        setCartList([]);
    }
    /* function clearItem(id) {
        DESARROLLAR
    } */

    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            clearCart
        }}>
            {children}
        </cartContext.Provider>
    );
}
