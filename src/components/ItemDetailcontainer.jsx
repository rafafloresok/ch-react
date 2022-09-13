import { useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import { UseDbContext } from "../context/DbContext";

import ItemDetail from "./ItemDetail";

import './ItemDetailContainer.css';

function ItemDetailContainer() {
    const {dbQueryDoc} = UseDbContext();
    const {id} = useParams();

    useEffect(() => {
        dbQueryDoc({collectionName: 'items', docId: id, loadingMessage: 'Cargando producto...'});
    },[id, dbQueryDoc]);

    return (
        <div className="itemDetailContainer">
            <ItemDetail/>
        </div>
    );
}

export default memo(ItemDetailContainer)