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
        <div className="productCard__btnContainer">
            <button onClick={handleSubs}> - </button>
            <span> {count} </span>
            <button onClick={handleAdd}> + </button>
        </div>
    );
}

export default ItemCount;