import { useState } from "react";
import { UseDbContext } from "../context/DbContext";
import { UseCartContext } from "../context/CartContext";
import { useFormValidation } from "../hooks/useFormValidation";

import './CartForm.css';

export default function CartForm () {
    const {createOrder} = UseDbContext();
    const {totalPrice, cartList, clearCart} = UseCartContext();

    const [customerData, setCustomerData] = useState({});
    const {name, phone, email, emailRepeat} = customerData;
    const formFilled = (!!name && !!phone && !!email && !!emailRepeat)

    const formErrors = useFormValidation(customerData);
    const {nameError, phoneError, emailError, emailRepeatError, commentsError} = formErrors;
    const formSuccess = (!nameError && !phoneError && !emailError && !emailRepeatError && !commentsError);

    const handleChange = (e) => {
        setCustomerData({
            ...customerData,
            [e.target.name]: e.target.value.trim()
        });
    }
    
    const handleSubmit = () => {
        if (formFilled && formSuccess) {
            createOrder({customerData, totalPrice, cartList, clearCart});
        }
    }
 
    return (
        <>
            <div className="cartForm">
                <p className="cartForm__title">Ingrese sus datos:</p>
                <form>
                    <input className="cartForm__input" name="name" onChange={(e) => handleChange(e)} type="text" placeholder="Nombre" />
                    {nameError && <span className="cartForm__error">Debe ingresar un nombre válido</span>}
                    <input className="cartForm__input" name="phone" onChange={(e) => handleChange(e)} type="tel" placeholder="Teléfono" />
                    {phoneError && <span className="cartForm__error">Debe ingresar un teléfono válido</span>}
                    <input className="cartForm__input" name="email" onChange={(e) => handleChange(e)} type="email" placeholder="Correo eléctronico" />
                    {emailError && <span className="cartForm__error">Debe ingresar un correo electrónico válido</span>}
                    <input className="cartForm__input" name="emailRepeat" onChange={(e) => handleChange(e)} type="email" placeholder="Repita correo electrónico" />
                    {emailRepeatError && <span className="cartForm__error">El correo electrónico no coincide</span>}
                    <textarea className="cartForm__textarea" name="comments" onChange={(e) => handleChange(e)} id="" cols="30" rows="10" placeholder="Escriba aquí sus comentarios..." ></textarea>
                    {commentsError && <span className="cartForm__error">No debe superar los 255 caracteres</span>}
                </form>
                <button className="cartForm__button" onClick={handleSubmit} style={formFilled? {cursor: 'pointer', background: '#008f39'}: {cursor: 'default', background: 'red'}} >{formFilled? 'Enviar pedido' : 'Complete el formulario'}</button>
            </div>
        </>
    );
}