
import ItemCount from "./ItemCount";

export default function ItemListContainer({greeting}) {
    return (
        <div className="itemListContainer">
            <h1 className="itemListContainer__title" style={{color: "blue"}}>{greeting}</h1>
            <ItemCount initial={1} stock={5} onAdd={()=>console.log("Agregado al pedido")}/>
        </div>
    );
}