
export default function ItemDetail({item}) {

    return (
        <div className="itemDetail">
            <img className="itemDetail__img" src={item.img} alt="" />
            <div className="itemDetail__filter"></div>
            <div className='itemDetail__info'>
                <p className='itemDetail__category'>{item.categoria}</p>
                <h3 className="itemDetail__title">{item.name}</h3>
                <p className="itemDetail__detail">{item.detail}</p>
                <p className='itemDetail__price'>{`Precio: $${item.price}`}</p>
            </div>
        </div>
    );
}