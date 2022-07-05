import { Link } from "react-router-dom";

import logo from '../images/logo.jpg';
import Nav from "./Nav";
import CartWidget from './CartWidget';

import './Header.css';

export default function Header() {

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