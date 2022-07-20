import React from 'react'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Item({ cadaItem }) {
    const { title, price, stock, imgUrl } = cadaItem;
    const id = useParams();
    cadaItem.id = id

    return (
        <div className="productCard" key={cadaItem.id}>
            <h2 className="productCard__title">{title}</h2>
            <div className="productCard__imgContainer">
                <img src={imgUrl} alt="" style={{ width: 10 + 'em' }} />
            </div>

            <div className="productCard__addCart" style={{ marginTop: 2 + "em" }}>
                <Link to={`item/${id}`}>
                    <button className='productCard__btn'>Ver Producto</button>
                </Link>
            </div>
        </div >
    )
}

export default Item