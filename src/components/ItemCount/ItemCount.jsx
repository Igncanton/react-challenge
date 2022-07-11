import './ItemCount.css'
import React, { useState } from "react";

const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);

    function handleAdd() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function handleSubs() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div className="productCard">
            <h2>Product Title</h2>
            <div className="productCard__btnContainer">
                <button onClick={handleSubs}> - </button>
                <span> {count} </span>
                <button onClick={handleAdd}> + </button>
            </div>
            <div className="productCard__addCart">
                <button>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;