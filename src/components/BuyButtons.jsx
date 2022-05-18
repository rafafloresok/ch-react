import { Link } from "react-router-dom";
import './BuyButtons.css';

export default function BuyButtons() {
    
    return (
        <div className="buyButtons">
            <Link to='/cart'>
                <button className="buyButtons__goToCart">Ver pedido</button>
            </Link>
            <Link to='/'>
                <button className="buyButtons__goToMenu">Volver al menú</button>
            </Link>
        </div>
    );

}