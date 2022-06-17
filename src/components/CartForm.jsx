import { useState } from "react";
import { UseCartContext } from "../context/CartContext";

import './CartForm.css';

export default function CartForm () {
    const [customerData, setCustomerData] = useState({});
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [email2Error, setEmail2Error] = useState(false);
    const {clearCart, createOrder} = UseCartContext();

    const handleChange = (e) => {
        setCustomerData({
            ...customerData,
            [e.target.name]: e.target.value
        });
    }
    const dataManage = () => {
        setNameError(!customerData.name);
        setPhoneError(!customerData.phone);
        setEmailError(!customerData.email);
        setEmail2Error(!(customerData.email2 === customerData.email));
        if (customerData.name && customerData.phone && customerData.email && (customerData.email2 === customerData.email)) {
            createOrder(customerData);
        }
    }

    return (
        <div className="cartForm">
            <p>Ingrese sus datos para enviar el pedido:</p>
            <form action="">
                <input name="name" onChange={(e) => handleChange(e)} type="text" placeholder="Nombre" />
                {nameError && <span>Debe ingresar un nombre</span>}
                <br />
                <input name="phone" onChange={(e) => handleChange(e)} type="tel" placeholder="Teléfono" />
                {phoneError && <span>Debe ingresar un teléfono</span>}
                <br />
                <input name="email" onChange={(e) => handleChange(e)} type="email" placeholder="Correo eléctronico" />
                {emailError && <span>Debe ingresar un correo electrónico</span>}
                <br />
                <input name="email2" onChange={(e) => handleChange(e)} type="email" placeholder="Repita correo electrónico" />
                {email2Error && <span>El correo electrónico no coincide</span>}
                <br />
                <textarea name="comment" onChange={(e) => handleChange(e)} id="" cols="30" rows="10"></textarea>
            </form>
            <button onClick={clearCart}>Vaciar pedido</button>
            <button onClick={dataManage}>Enviar pedido</button>
        </div>
    );
}