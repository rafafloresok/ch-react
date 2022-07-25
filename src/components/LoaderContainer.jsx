import { UseCartContext } from "../context/CartContext";
import Loader from './Loader';

export default function() {
    const {contLoader} = UseCartContext();

    return (
        <>
          {contLoader && <Loader/>}  
        </>
    )
}