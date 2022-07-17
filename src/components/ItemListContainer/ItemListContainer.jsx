import './ItemListContainer.css'
import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import instrumentsDB from "../../data/instruments"

const ItemListContainer = ({ greetings }) => {

    let [items, setItems] = useState([]);

    useEffect(
        () => {
            let promiseItems = new Promise((resolve, reject) => {
                setTimeout(
                    () => {
                        resolve(instrumentsDB);
                    },
                    2000);
            });

            promiseItems.then(
                (respuesta) => {
                    setItems(instrumentsDB)
                }
            ).catch(
                (errorMsg) => console.error(errorMsg)
            )
        },
        []
    )

    return (
        <>
            <p className='itemListP'>{greetings}</p>
            <ItemList items={items} />
        </>
    );
}

export default ItemListContainer;