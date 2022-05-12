import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);

    useEffect(() => {
        fetch("/data/data.json")
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    },[]);

    return (
        <div className="itemDetailContainer">
            <h1 className="itemDetailContainer__title">Soy Item Detail Container</h1>
            {loader? <h2>Cargando...</h2>: <ItemDetail categoria={items[1].categoria} name={items[1].name} price={items[1].price} img={items[1].img}/>}
        </div>
    );
}