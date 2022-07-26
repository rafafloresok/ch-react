import { createContext, useContext, useState } from "react";
import { collection, getDoc, doc, getDocs, getFirestore, where, query, documentId, writeBatch, addDoc } from 'firebase/firestore';

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
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);
    const [detailedItem, setDetailedItem] = useState({});
    const [contLoader, setContLoader] = useState(false);

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

    function dbQueryCollection(collectionName, collectionFilter, sortKey, setOwnLoader) {
        setOwnLoader ? setOwnLoader(true) : setContLoader(true);
        
        const db = getFirestore();
        const queryCollection = collection(db, collectionName);
        const queryCollectionFilter = collectionFilter?
            query(queryCollection, where('category','==',collectionFilter)):
            queryCollection;
        
        getDocs(queryCollectionFilter)
        .then(resp => resp.docs.map(el => ({id: el.id, ...el.data()})))
        .then(data => data.sort((a, b) => {
            if (a[sortKey] > b[sortKey]) {return 1};
            if (a[sortKey] < b[sortKey]) {return -1};
            return 0;
        }))
        .then(sorted => {switch (collectionName) {
            case 'categories':
                setCategories(sorted);
                break;
            case 'items':
             setItems(sorted);
                break;
            default:
                console.log('invalid collection name');
        }})
        .catch(err => console.log(err))
        .finally(() => setOwnLoader ? setOwnLoader(false) : setTimeout(() => {setContLoader(false)}, 1000))
    }

    function dbQueryDoc(collectionName, docId, setOwnLoader) {
        setOwnLoader ? setOwnLoader(true) : setContLoader(true);

        const db = getFirestore();
        const dbQuery = doc(db, collectionName, docId);
        getDoc(dbQuery)
        .then(resp => setDetailedItem({id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(() => setOwnLoader ? setOwnLoader(false) : setTimeout(() => {setContLoader(false)}, 1000))
    }

    function createOrder(customerData) {
        setContLoader(true);
    
        let order = {};
        
        order.customerData = customerData;
        order.totalPrice = totalPrice;
        order.items = cartList.map(item => {
            const id = item.id;
            const name = item.name;
            const quantity = item.quantity;
            const newStock = item.stock-item.quantity;
            const price = item.price*item.quantity;
            return {id, name, quantity, newStock, price}
        });
    
        async function updateStocks() {
            const queryCollectionStocks = collection(db, 'items');
            const queryUpdateStocks = query(queryCollectionStocks, where(documentId(), 'in', cartList.map(item => item.id)));
            const batch = writeBatch(db);
    
            await getDocs(queryUpdateStocks)
            .then(resp => resp.docs.forEach(
                res => batch.update(res.ref, {stock: order.items.find(item => item.id === res.id).newStock})
            ))
            .catch(err => console.log(err))
    
            batch.commit()
        }
    
        const db = getFirestore();
        const queryCollectionOrders = collection(db, 'orders');
        addDoc(queryCollectionOrders, order)
        .then(resp => setOrderId(resp.id))
        .then(() => updateStocks())
        .catch(err => console.log(err))
        .finally(() => {
            clearCart('sent');
            setContLoader(false);
        })
    }

    return (
        <cartContext.Provider value={{
            cartList,
            totalPrice,
            totalItems,
            orderId,
            qtyInCart,
            categories,
            items,
            detailedItem,
            contLoader,
            addToCart,
            clearCart,
            clearItem,
            isInCart,
            checkQtyInCart,
            setOrderId,
            toggleElement,
            dbQueryCollection,
            dbQueryDoc,
            createOrder
        }}>
            {children}
        </cartContext.Provider>
    );
}