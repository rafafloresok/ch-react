import { useEffect } from "react";
import { Link } from "react-router-dom";
import { UseCartContext } from "../context/CartContext";

import logo from '../images/logo.jpg';
import Nav from "./Nav";
import CartWidget from './CartWidget';

import './Header.css';

export default function Header() {
    const {updateCart} = UseCartContext();

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem("localCart")) || [];
        updateCart(localCart)
    }, [])

    return (
        <header className="header">
            <Link to='/'>
                <img className="header__logo" src={logo} alt="" />
            </Link>
            <Nav/>
            <CartWidget/>
        </header>
    );
}