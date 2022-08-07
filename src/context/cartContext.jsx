import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function UseCartContext() {
    return useContext(cartContext)
}

export default function CartContextProv({children}) {
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [qtyInCart, setQtyInCart] = useState(0);
    const [showToast, setShowToast] = useState(false);
    const [addedItem, setAddedItem] = useState({});

    function isInCart(item) {
        return cartList.some(el => el.id === item.id);
    }

    function addToCart(item) {
        setAddedItem(item);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false)
            if (isInCart(item)) {
                let i = cartList.findIndex(el => el.id === item.id);
                const newCartList = cartList;
                newCartList[i].quantity += item.quantity;
                updateCart(newCartList);
            } else {
                updateCart([...cartList,item]);
            }
        }, 2500);
    }

    function clearCart(sent) {
        updateCart([]);
    }

    function clearItem(item) {
        const newCartList = cartList.filter(el => el.id !== item.id);
        updateCart(newCartList);
    }

    function updateCart(arr) {
        localStorage.setItem("localCart", JSON.stringify(arr));
        setCartList(arr);
        setTotalPrice(arr
            .map(curr => curr.quantity*curr.price)
            .reduce((acc,curr) => acc+curr,0)
        );
        setTotalItems(arr
            .map(curr => curr.quantity)
            .reduce((acc,curr) => acc+curr,0)
        );
    }

    function checkQtyInCart(item) {
        if (isInCart(item)) {
            let i = cartList.findIndex(el => el.id === item.id);
            setQtyInCart(cartList[i].quantity);
        } else {
            setQtyInCart(0);
        }
    }

    return (
        <cartContext.Provider value={{
            cartList,
            totalPrice,
            totalItems,
            qtyInCart,
            showToast,
            addedItem,
            addToCart,
            clearCart,
            clearItem,
            isInCart,
            checkQtyInCart,
            updateCart
        }}>
            {children}
        </cartContext.Provider>
    );
}