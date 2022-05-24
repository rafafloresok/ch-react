import { Link } from "react-router-dom";
import './CartWidget.css';


export default function CartWidget() {
    return (
        <Link to='/cart'>
            <div className='cartWidget'>
                <span className="cartWidget__icon"><i className="bi bi-bag"></i></span>
                <span className="cartWidget__counter">0</span>
            </div>
        </Link>
    );
}