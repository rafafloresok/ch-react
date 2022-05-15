import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
    const [item,setItem] = useState({});
    const [loader,setLoader] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        setTimeout(() => {
            fetch("/data/data.json")
            .then(response => response.json())
            .then(itemsList => itemsList.find(el => el.id === id))
            .then(data => setItem(data))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
        }, 2000);
    },[id]);

    return (
        <div className="itemDetailContainer">
            {/* <h1 className="itemDetailContainer__title">Soy Item Detail Container</h1> */}
            {loader? <h2>Cargando...</h2>: <ItemDetail item={item}/>}
        </div>
    );
}