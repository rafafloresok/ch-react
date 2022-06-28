import { useEffect, useState } from "react";
import { dbQueryCollection } from "../js/functions";

import NavItem from "./NavItem";

import './Nav.css';

export default function Nav() {
    const [categories,setCategories] = useState([]);
    const [loader,setLoader] = useState(true);
    const [showMenu, setShowMenu] = useState(false);

    const toggleNav = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        dbQueryCollection('categories', false, 'name', setCategories, setLoader);
    },[]);

    return (
        <nav className="navBar">
            <button className="navBar__toggleBtn" onClick={toggleNav}><i className="bi bi-list"></i></button>
            <ul className="navBar__list" style={{display: showMenu && 'flex'}}>
                {loader?
                    <li style={{color: 'white', margin: 'auto'}}>Cargando categorías...</li>:
                    categories.map((category) => <NavItem key={category.id} category={category} toggleNav={toggleNav}/>)
                }
            </ul>
        </nav>
    );
}