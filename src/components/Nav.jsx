import { useEffect, useState, useRef } from "react";
import { UseCartContext } from "../context/CartContext";

import NavItem from "./NavItem";

import './Nav.css';

export default function Nav() {
    const {toggleElement, dbQueryCollection, categories} = UseCartContext();
    const [breakpoint,setBreakpoint] = useState();
    const [loader,setLoader] = useState(true);
    const navList = useRef();

    const toggleNav = () => {breakpoint >= window.innerWidth && toggleElement(navList)};

    useEffect(() => {
        dbQueryCollection('categories', false, 'displayOrder', setLoader);
        navList.current.id = 'isOut';
    },[]);

    useEffect(() => {
        setBreakpoint((categories.map(el => el.name).join('').length)*13+(categories.length)*45+180)
        window.addEventListener('resize', function() {
            setBreakpoint((categories.map(el => el.name).join('').length)*13+(categories.length)*45+180)
            if (window.innerWidth > breakpoint) {
                navList.current.style.display = 'flex';
                navList.current.id = 'isOut';
            } else {
                navList.current.style.display = 'none';
                navList.current.id = 'isOut';
            }
        })
    },[categories, breakpoint]);

    return (
        <nav className="navBar">
            <button
                className={`navBar__toggleBtn--${breakpoint >= window.innerWidth? 'notCollapsed':'collapsed'}`}
                onClick={toggleNav}>
                <i className="bi bi-list"></i>
            </button>
            <ul ref={navList} className={`navBar__list--${breakpoint >= window.innerWidth? 'collapsed':'notCollapsed'}`}>
                {loader?
                    <li style={{color: 'white', margin: 'auto'}}>Cargando categorías...</li>:
                    categories.map((category) => <NavItem key={category.id} category={category} toggleNav={toggleNav}/>)
                }
            </ul>
        </nav>
    );
}