import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dbQueryDoc } from "../js/functions";

import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
    const [item,setItem] = useState({});
    const [loader,setLoader] = useState(true);
    const {id} = useParams();
    
    useEffect(() => {
        dbQueryDoc('items',id,setItem,setLoader);
    },[id]);

    return (
        <div className="itemDetailContainer">
            {loader?
                <Loader/>:
                <ItemDetail item={item}/>
            }
        </div>
    );
}