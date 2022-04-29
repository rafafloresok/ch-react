export default function ItemListContainer({greeting}) {
    return (
        <div className="itemListContainer">
            <h1 className="itemListContainer__title" style={{color: "blue"}}>{greeting}</h1>
        </div>
    );
}