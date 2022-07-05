import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function UseCartContext() {
    return useContext(cartContext)
}

export default function CartContextProv({children}) {
    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [orderId, setOrderId] = useState('');
    const [qtyInCart, setQtyInCart] = useState(0);

    function isInCart(item) {
        return cartList.some(el => el.id === item.id);
    }
    function addToCart(item) {
        if (isInCart(item)) {
            let i = cartList.findIndex(el => el.id === item.id);
            const newCartList = cartList;
            newCartList[i].quantity += item.quantity;
            updateCart(newCartList);
        } else {
            updateCart([...cartList,item]);
        }
    }
    function clearCart(sent) {
        if(sent !== 'sent') setOrderId('');
        updateCart([]);
    }
    function clearItem(item) {
        setOrderId('');
        const newCartList = cartList.filter(el => el.id !== item.id);
        updateCart(newCartList);
    }
    function updateCart(arr) {
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
    function toggleElement(element) {
        if (element.current.id === 'isOut') {
            element.current.id = 'isIn';
            element.current.classList.add('in-from-right');
            element.current.style.display = 'flex';
            setTimeout(() => {
                element.current.classList.remove('in-from-right');
            }, 800);
        } else {
            element.current.id = 'isOut';
            element.current.classList.add('out-to-right');
            setTimeout(() => {
                element.current.style.display = 'none';
                element.current.classList.remove('out-to-right');
            }, 800);
        }
    }

    return (
        <cartContext.Provider value={{
            cartList,
            totalPrice,
            totalItems,
            orderId,
            qtyInCart,
            addToCart,
            clearCart,
            clearItem,
            isInCart,
            checkQtyInCart,
            setOrderId,
            toggleElement,
        }}>
            {children}
        </cartContext.Provider>
    );
}