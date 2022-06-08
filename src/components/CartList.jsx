import { useState } from "react";
import { UseCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import './CartList.css';

export default function CartList({sendOrderManage}) {
    const [customerData, setCustomerData] = useState({});
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [email2Error, setEmail2Error] = useState(false);
    const {cartList, clearCart, totalPrice} = UseCartContext();

    function changeHandler(e) {
        setCustomerData({
            ...customerData,
            [e.target.name]: e.target.value
        });
    }

    function dataManage() {
        setNameError(!customerData.name);
        setPhoneError(!customerData.phone);
        setEmailError(!customerData.email);
        setEmail2Error(!(customerData.email2 === customerData.email));
        if (customerData.name && customerData.phone && customerData.email && (customerData.email2 === customerData.email)) {
            sendOrderManage(customerData);
        }
    }

    return (
        <div className="cartList">
            <h1 className="cart__title">Su pedido:</h1>
            {cartList.map((el) => <CartItem key={el.id} item={el}/>)}
            <p>{`Costo total: $${totalPrice}`}</p>
            <p>Ingrese sus datos para enviar el pedido:</p>
            <form action="">
                <input name="name" onChange={(e) => changeHandler(e)} type="text" placeholder="Nombre" />
                {nameError && <span>Debe ingresar un nombre</span>}
                <br />
                <input name="phone" onChange={(e) => changeHandler(e)} type="tel" placeholder="Teléfono" />
                {phoneError && <span>Debe ingresar un teléfono</span>}
                <br />
                <input name="email" onChange={(e) => changeHandler(e)} type="email" placeholder="Correo eléctronico" />
                {emailError && <span>Debe ingresar un correo electrónico</span>}
                <br />
                <input name="email2" onChange={(e) => changeHandler(e)} type="email" placeholder="Repita correo electrónico" />
                {email2Error && <span>El correo electrónico no coincide</span>}
                <br />
                <textarea name="comment" onChange={(e) => changeHandler(e)} id="" cols="30" rows="10"></textarea>
            </form>
            <button onClick={clearCart}>Vaciar pedido</button>
            <button onClick={dataManage}>Enviar pedido</button>
        </div>
    );
}