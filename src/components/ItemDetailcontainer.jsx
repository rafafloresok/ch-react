import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);
    const [select] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            fetch("/data/data.json")
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
        }, 2000);
    },[]);

    return (
        <div className="itemDetailContainer">
            <h1 className="itemDetailContainer__title">Soy Item Detail Container</h1>
            {loader? <h2>Cargando...</h2>: <ItemDetail item={items[select]}/>}
        </div>
    );
}