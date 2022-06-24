import { Link } from "react-router-dom";

import logo from '../images/logo.jpg';
import Nav from "./Nav";
import CartWidget from './CartWidget';

import './NavBar.css';

export default function NavBar() {
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
