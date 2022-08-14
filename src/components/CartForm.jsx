import { useState } from "react";
import { UseDbContext } from "../context/DbContext";
import { UseCartContext } from "../context/CartContext";

import './CartForm.css';

export default function CartForm () {
    const {createOrder} = UseDbContext();
    const {totalPrice, cartList, clearCart} = UseCartContext();

    const [customerData, setCustomerData] = useState({});
    const [email2, setEmail2] = useState();
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [email2Error, setEmail2Error] = useState(false);
    const [commentsError, setCommentsError] = useState(false);

    const handleChange = (e) => {
        setCustomerData({
            ...customerData,
            [e.target.name]: e.target.value.trim()
        });
    }

    const handleSubmit = () => {
        const {name, phone, email, comments} = customerData;
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexPhone = /^[0-9/-]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexComments = /^.{0,255}$/;

        let nameErr = !name || !regexName.test(name);
        let phoneErr = !phone || !regexPhone.test(phone);
        let emailErr = !email || !regexEmail.test(email);
        let email2Err = !(email2 === email);
        let commentsErr = !regexComments.test(comments);

        setNameError(nameErr);
        setPhoneError(phoneErr);
        setEmailError(emailErr);
        setEmail2Error(email2Err);
        setCommentsError(commentsErr);
        
        if (!nameErr && !phoneErr && !emailErr && !email2Err && !commentsErr) {
            createOrder(customerData, totalPrice, cartList, clearCart);
        }
    }
 
    return (
        <>
            <div className="cartForm">
                <p className="cartForm__title">Ingrese sus datos:</p>
                <form action="">
                    <input className="cartForm__input" name="name" onChange={(e) => handleChange(e)} type="text" placeholder="Nombre" />
                    {nameError && <span className="cartForm__error">Debe ingresar un nombre válido</span>}
                    <input className="cartForm__input" name="phone" onChange={(e) => handleChange(e)} type="tel" placeholder="Teléfono" />
                    {phoneError && <span className="cartForm__error">Debe ingresar un teléfono válido</span>}
                    <input className="cartForm__input" name="email" onChange={(e) => handleChange(e)} type="email" placeholder="Correo eléctronico" />
                    {emailError && <span className="cartForm__error">Debe ingresar un correo electrónico válido</span>}
                    <input className="cartForm__input" name="email2" onChange={(e) => setEmail2(e.target.value.trim())} type="email" placeholder="Repita correo electrónico" />
                    {email2Error && <span className="cartForm__error">El correo electrónico no coincide</span>}
                    <textarea className="cartForm__textarea" name="comments" onChange={(e) => handleChange(e)} id="" cols="30" rows="10" placeholder="Escriba aquí sus comentarios..." ></textarea>
                    {commentsError && <span className="cartForm__error">Los comentarios no deben superar los 255 caracteres</span>}
                </form>
                <button className="cartForm__button" onClick={handleSubmit}>Enviar pedido</button>
            </div>
        </>
    );
}