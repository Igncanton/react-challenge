import React from 'react'


function Item({ cadaItem }) {
    return (
        <div className="productCard" key={cadaItem.id}>
            <h2>{cadaItem.title}</h2>
            <div className="productCard__imgContainer">
                {cadaItem.category}
            </div>

            <div className="productCard__addCart" style={{ marginTop: 2 + "em" }}>
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Item