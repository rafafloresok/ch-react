import { useEffect, useState, useRef } from "react";
import { dbQueryCollection } from "../js/functions";
import { UseCartContext } from "../context/CartContext";

import NavItem from "./NavItem";

import './Nav.css';

export default function Nav() {
    const {toggleElement} = UseCartContext();
    const [categories,setCategories] = useState([]);
    const [loader,setLoader] = useState(true);
    const navList = useRef();

    const toggleNav = () => toggleElement(navList);

    useEffect(() => {
        dbQueryCollection('categories', false, 'name', setCategories, setLoader);
        navList.current.id = 'isOut';
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768) {
                navList.current.style.display = 'flex';
                navList.current.id = 'isOut';
            } else {
                navList.current.style.display = 'none';
                navList.current.id = 'isOut';
            }
        })
    },[]);
    console.dir(categories)

    return (
        <nav className="navBar">
            <button className="navBar__toggleBtn" onClick={toggleNav}><i className="bi bi-list"></i></button>
            <ul ref={navList} className='navBar__list'>
                {loader?
                    <li style={{color: 'white', margin: 'auto'}}>Cargando categorías...</li>:
                    categories.map((category) => <NavItem key={category.id} category={category} toggleNav={toggleNav}/>)
                }
            </ul>
        </nav>
    );
}