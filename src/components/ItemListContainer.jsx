import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const products = [
    {id: "01", categoria: "hamburguesas", name: "Hamburguesa Con Queso", price: 300, img: '"../images/hamburguesa-de-cordero.jpg"'},
    {id: "02", categoria: "hamburguesas", name: "Hamburguesa Clásica", price: 350, img: "../images/hamburguesa-de-cordero2.jpg"},
    {id: "03", categoria: "hamburguesas", name: "Hamburguesa Cheddar", price: 400, img: "../images/hamburguesa-de-cordero3.jpg"},
    {id: "04", categoria: "hamburguesas", name: "Hamburguesa de Doble Carne", price: 450, img: "../images/hamburguesa-de-cordero4.jpg"},
    {id: "05", categoria: "hamburguesas", name: "Hamburguesa de Cerdo", price: 500, img: "../images/hamburguesa-de-cordero5.jpg"}
];

const getFetch = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
})

export default function ItemListContainer({greeting}) {
    const [items,setItems] = useState([]);
    const [loader,setLoader] = useState(true);


    useEffect(() => {
        getFetch
        .then(res => setItems(res))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    },[]);

    return (
        <div className="itemListContainer">
            <h1 className="itemListContainer__title" style={{color: "blue"}}>{greeting}</h1>
            {loader? <h2>Cargando...</h2>: <ItemList items={items} />}
        </div>
    );
}