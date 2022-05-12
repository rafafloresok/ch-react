
export default function ItemDetail({categoria, name, price, img}) {

    return (
        <div className="itemDetail">
            {/* <img className="itemDetail__img" src={item.img} alt="" /> */}
            <div className="itemDetail__filter"></div>
            <div className='itemDetail__info'>
                <p className='itemDetail__category'>{categoria}</p>
                <h3 className="itemDetail__title">Soy Item Detail{name}</h3>
                <p className="itemDetail__detail">{name}</p>
                <p className='itemDetail__price'>{`Precio: $${price}`}</p>
            </div>
        </div>
    );
}