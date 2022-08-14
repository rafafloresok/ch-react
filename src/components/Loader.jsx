import { UseDbContext } from "../context/DbContext";

import logoGrande from '../images/logo_grande.jpg';

import './Loader.css';

export default function Loader() {
    const {dbLoading} = UseDbContext();

    return (
        <div className="loader">
            <img className="loader__img" src={logoGrande} alt="" />
            <h2 className='loader__text'>{dbLoading.message || 'Cargando...'}</h2>
        </div>
    );
}