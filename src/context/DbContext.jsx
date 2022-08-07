import { createContext, useContext, useState, useCallback } from "react";
import { collection, getDoc, doc, getDocs, getFirestore, where, query, documentId, writeBatch, addDoc } from 'firebase/firestore';

const dbContext = createContext([]);

export function UseDbContext() {
    return useContext(dbContext)
}

export default function DbContextProv({children}) {
    const [orderId, setOrderId] = useState('');
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);
    const [detailedItem, setDetailedItem] = useState({});
    const [dbLoading, setDbLoading] = useState(false);

    const dbQueryCollection = useCallback((collectionName, collectionFilter, sortKey, setOwnLoading) => {
        setOwnLoading ? setOwnLoading(true) : setDbLoading(true);
        
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
        .finally(() => setOwnLoading ? setOwnLoading(false) : setTimeout(() => {setDbLoading(false)}, 1000))
    },[])

    const dbQueryDoc = useCallback((collectionName, docId, setOwnLoading) => {
        setOwnLoading ? setOwnLoading(true) : setDbLoading(true);

        const db = getFirestore();
        const dbQuery = doc(db, collectionName, docId);
        getDoc(dbQuery)
        .then(resp => setDetailedItem({id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(() => setOwnLoading ? setOwnLoading(false) : setTimeout(() => {setDbLoading(false)}, 1000))
    }, [])

    function createOrder(customerData, totalPrice, cartList, clearCart) {
        setDbLoading(true);
    
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
            clearCart();
            setDbLoading(false);
        })
    }

    return (
        <dbContext.Provider value={{
            orderId,
            categories,
            items,
            detailedItem,
            dbLoading,
            setOrderId,
            dbQueryCollection,
            dbQueryDoc,
            createOrder,
        }}>
            {children}
        </dbContext.Provider>
    );
}
