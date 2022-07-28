import { UseCartContext } from "../context/CartContext";
import Toast from './Toast';

export default function ToastContainer() {
    const {showToast} = UseCartContext();

    return (
        <>
            {showToast && <Toast/>}
        </>
    )
}