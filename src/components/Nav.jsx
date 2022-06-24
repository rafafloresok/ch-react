import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import NavItem from "./NavItem";

import './Nav.css';

export default function Nav() {
    const [categories,setCategories] = useState([]);
    const [loader,setLoader] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'categories');
        
        getDocs(queryCollection)
        .then(resp => resp.docs.map(el => ({id: el.id, ...el.data()})))
        .then(data => data.sort((a, b) => {
            if (a.name > b.name) {return 1};
            if (a.name < b.name) {return -1};
            return 0;
        }))
        .then(sorted => setCategories(sorted))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    });

    return (
        <nav className="navBar">
            <ul className="navBar__list">
                {loader ? <li style={{color: 'white', margin: 'auto'}}>Cargando categorías...</li> : categories.map((category) => <NavItem key={category.id} category={category}/>)}
            </ul>
        </nav>
    );
}