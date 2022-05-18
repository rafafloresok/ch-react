import logoGrande from '../images/logo_grande.jpg';
import './Loader.css';

export default function Loader() {

    return (
        <div className="loader">
            <img className="loader__img" src={logoGrande} alt="" />
            <h2 className='loader__text'>Cargando...</h2>
        </div>
    );
}