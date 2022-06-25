import { useEffect, useState } from "react";
import { dbQuery } from "../js/functions";

import NavItem from "./NavItem";

import './Nav.css';

export default function Nav() {
    const [categories,setCategories] = useState([]);
    const [loader,setLoader] = useState(true);

    useEffect(() => {
        dbQuery('categories', false, setCategories, setLoader);
    },[]);

    return (
        <nav className="navBar">
            <ul className="navBar__list">
                {loader?
                    <li style={{color: 'white', margin: 'auto'}}>Cargando categorías...</li>:
                    categories.map((category) => <NavItem key={category.id} category={category}/>)
                }
            </ul>
        </nav>
    );
}