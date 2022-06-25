import { collection, getDocs, getFirestore, where, query } from 'firebase/firestore';

export function dbQuery(collectionName, collectionFilter, sortKey, setState, setLoader) {
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