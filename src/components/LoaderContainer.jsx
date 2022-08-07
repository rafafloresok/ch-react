import { UseDbContext } from "../context/DbContext";
import Loader from './Loader';

export default function LoaderContainer() {
    const {dbLoading} = UseDbContext();

    return (
        <>
          {dbLoading && <Loader/>}  
        </>
    )
}