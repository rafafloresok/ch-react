import cartIcon from './cartIcon.svg';
import './CartWidget.css';


export default function CartWidget() {
    return (
        <div className="cart">
            <button className="cart__btn"><i class="bi bi-bag"></i></button>
            <span className="cart__counter">0</span>
        </div>
    );
}