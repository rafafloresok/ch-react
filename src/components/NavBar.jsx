import { Link } from "react-router-dom";
import logo from '../images/logo.jpg';
import CartWidget from './CartWidget';
import './NavBar.css';

export default function NavBar() {
    return (
        <header className="header">
            <Link to='/'>
                <img className="header__logo" src={logo} alt="" />
            </Link>
            <nav className="navBar">
                <ul className="navBar__list">
                    <Link to='/category/hamburguesas' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item">Hamburguesas</li>
                    </Link>
                    <Link to='/category/lomos' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item">Lomos</li>
                    </Link>
                    <Link to='/category/milanesas' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item">Milanesas</li>
                    </Link>
                    <Link to='/category/otros' style={{ textDecoration: 'none' }}>
                        <li className="navBar__item">Otros sándwiches</li>
                    </Link>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    );
}
