import React, { useEffect, useState } from 'react';
import instrumentsDB from '../data/instruments'
import ItemDetail from './ItemDetail';

function getInstrument() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(instrumentsDB);
        }, 2000);
    });
}

function ItemDetailContainer() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        getInstrument().then(respuestaPromise => {
            setItem(respuestaPromise[0]);
        });
    }, []);

    return (
        <section style={{ marginTop: 2 + "em" }}>
            <ItemDetail item={item} />
        </section>
    )
}

export default ItemDetailContainer