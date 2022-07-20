import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import instrumentsDB from "../data/instruments"

import { useParams } from "react-router-dom";
// import Spinner from "./ExampleComponents/Spinner";

const ItemListContainer = () => {
    const { name } = useParams(); /* !!!!!!!!!!!!!!!!!!!!! */

    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(false); /* !!!!!!!!!!!!!!!!!!!!! */

    const promiseItems = new Promise((resolve, reject) => {
        setTimeout(() => { resolve(instrumentsDB); }, 2000);
    });

    useEffect(() => {
        setLoading(true);

        promiseItems.then((respuesta) => {
            const products = respuesta;
            if (name) {
                setItems(products.filter((product) => product.category == name));
            } else {
                setItems(products)
            }
            setLoading(false);
        })
    }, [name]);

    return (
        <>
            <p className='itemListP'>Guitars Market Place</p>
            <ItemList items={items} />
        </>
    );
}

export default ItemListContainer;