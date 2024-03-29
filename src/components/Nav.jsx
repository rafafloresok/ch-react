import { useEffect, useState, useRef, memo } from "react";
import { UseDbContext } from "../context/DbContext";
import { toggleElement } from "../helpers/helpers";

import NavItem from "./NavItem";

import './Nav.css';

function Nav() {
    const {dbQueryCollection, categories} = UseDbContext();
    const [breakpoint, setBreakpoint] = useState();
    const [loader, setLoader] = useState(true);
    const navList = useRef();

    const toggleNav = () => {breakpoint >= window.innerWidth && toggleElement(navList)};

    useEffect(() => {
        dbQueryCollection({collectionName: 'categories', sortKey: 'displayOrder', setOwnLoading: setLoader});
        navList.current.id = 'isOut';
    },[dbQueryCollection]);

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

export default memo(Nav)