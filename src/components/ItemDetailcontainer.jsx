import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
    const [item,setItem] = useState({});
    const [loader,setLoader] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const dbQuery = doc(db, 'items', id);
        getDoc(dbQuery)
        .then(resp => setItem({id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    },[id]);

    return (
        <div className="itemDetailContainer">
            {loader?
                <Loader/>:
                <ItemDetail item={item}/>}
        </div>
    );
}