import React from 'react'
import ItemCount from '../../../ItemCount/ItemCount'

function Item({ cadaItem }) {
    return (
        <div className="productCard" key={cadaItem.id}>
            <h2>{cadaItem.title}</h2>
            <div className="productCard__imgContainer">
                {cadaItem.category}
            </div>
            <ItemCount stock={cadaItem.stock} initial={1} />
            <div className="productCard__addCart">
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Item