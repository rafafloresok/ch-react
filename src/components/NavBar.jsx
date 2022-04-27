import logo from '../images/logo.jpg';
import './NavBar.css';

function NavBar() {
    return (
        <header className="header">
            <a className="header__logo" href="">
                <img className="header__img" src={logo} alt="" />
            </a>
            <nav className="navBar">
                <ul className="navBar__list">
                    <li className="navBar__item"><a className="navBar__link" href="#">Hamburguesas</a></li>
                    <li className="navBar__item"><a className="navBar__link" href="#">Lomos</a></li>
                    <li className="navBar__item"><a className="navBar__link" href="#">Milanesas</a></li>
                    <li className="navBar__item"><a className="navBar__link" href="#">Otros sándwiches</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar