import { collection, getDoc, doc, getDocs, getFirestore, where, query, documentId, writeBatch, addDoc } from 'firebase/firestore';

export function dbQueryCollection(collectionName, collectionFilter, sortKey, setState, setLoader) {
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
    .then(sorted => setState(sorted))
    .catch(err => console.log(err))
    .finally(() => setLoader(false))
}

export function dbQueryDoc(collectionName,docId,setItem,setLoader) {
    const db = getFirestore();
    const dbQuery = doc(db, collectionName, docId);
    getDoc(dbQuery)
    .then(resp => setItem({id: resp.id, ...resp.data()}))
    .catch(err => console.log(err))
    .finally(() => setLoader(false))
}

export function createOrder(setLoader, customerData, totalPrice, cartList, setOrderId, clearCart) {
    setLoader(true);

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
    .finally(() => clearCart('sent'))
}