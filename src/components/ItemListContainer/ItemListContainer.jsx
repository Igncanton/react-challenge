import './ItemListContainer.css'
import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = ({ greetings }) => {
    const ItemsDatos = [
        {
            id: 1,
            title: "Gibson Les Paul",
            price: 1520,
            category: "Les Paul",
            stock: 8
        },
        {
            id: 2,
            title: "Fender Stratocaster",
            price: 1890,
            category: "Stratocaster",
            stock: 11
        },
        {
            id: 3,
            title: "Fender JazzMaster",
            price: 1520,
            category: "JazzMaster",
            stock: 7
        },
        {
            id: 4,
            title: "PRS Sunburst",
            price: 2120,
            category: "Semi-Hollow",
            stock: 7
        }
    ]

    let [items, setItems] = useState([]);

    useEffect(
        () => {
            let promiseItems = new Promise((resolve, reject) => {
                setTimeout(
                    () => {
                        resolve(ItemsDatos);
                    },
                    2000);
            });

            promiseItems.then(
                (respuesta) => {
                    setItems(ItemsDatos)
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