import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
    const [item,setItem] = useState({});
    const [loader,setLoader] = useState(true);
    const [quantityToAdd,setQuantityToAdd] = useState();

    const {id} = useParams();

    function onAdd(quantity, name) {
        setQuantityToAdd(quantity)
        console.log(`${quantity} unidad/es de ${name} agregada/s al pedido`)
    }

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
            {loader?
                <h2>Cargando...</h2>:
                <ItemDetail item={item} onAdd={onAdd}/>}
        </div>
    );
}