import { useState } from "react";
import { UseDbContext } from "../context/DbContext";
import { UseCartContext } from "../context/CartContext";

import './CartForm.css';

export default function CartForm () {
    const {createOrder} = UseDbContext();
    const {totalPrice, cartList, clearCart} = UseCartContext();

    const [customerData, setCustomerData] = useState({});
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [email2Error, setEmail2Error] = useState(false);

    const handleChange = (e) => {
        setCustomerData({
            ...customerData,
            [e.target.name]: e.target.value
        });
    }

    const sendOrder = () => {
        const {name, phone, email, email2} = customerData;
        setNameError(!name);
        setPhoneError(!phone);
        setEmailError(!email);
        setEmail2Error(!(email2 === email));
        if (name && phone && email && (email2 === email)) {
            createOrder(customerData, totalPrice, cartList, clearCart)
        }
    }

    return (
        <>
            <div className="cartForm">
                <p className="cartForm__title">Ingrese sus datos:</p>
                <form action="">
                    <input className="cartForm__input" name="name" onChange={(e) => handleChange(e)} type="text" placeholder="Nombre" />
                    {nameError && <span className="cartForm__error">Debe ingresar un nombre</span>}
                    <input className="cartForm__input" name="phone" onChange={(e) => handleChange(e)} type="tel" placeholder="Teléfono" />
                    {phoneError && <span className="cartForm__error">Debe ingresar un teléfono</span>}
                    <input className="cartForm__input" name="email" onChange={(e) => handleChange(e)} type="email" placeholder="Correo eléctronico" />
                    {emailError && <span className="cartForm__error">Debe ingresar un correo electrónico</span>}
                    <input className="cartForm__input" name="email2" onChange={(e) => handleChange(e)} type="email" placeholder="Repita correo electrónico" />
                    {email2Error && <span className="cartForm__error">El correo electrónico no coincide</span>}
                    <textarea className="cartForm__textarea" name="comment" onChange={(e) => handleChange(e)} id="" cols="30" rows="10" placeholder="Escriba aquí sus comentarios..." ></textarea>
                </form>
                <button className="cartForm__button" onClick={sendOrder}>Enviar pedido</button>
            </div>
        </>
    );
}