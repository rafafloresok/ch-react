import { Link } from "react-router-dom";

import './NavItem.css';

export default function NavItem({category}) {

    return (
        <Link to={`/category/${category.name}`} style={{ textDecoration: 'none' }}>
            <li className="navBar__item">{category.name}</li>
        </Link>
    );
}