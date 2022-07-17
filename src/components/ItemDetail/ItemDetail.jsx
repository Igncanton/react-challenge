import '../ItemCount/ItemCount.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ item }) => {
    return (
        <div className="productCard" key={item.id}>
            <h2>{item.title}</h2>
            <p>Item Detail</p>
            <div className="productCard__imgContainer">
                <img src={item.imgUrl} alt="" style={{ width: 10 + 'em' }} />
            </div>

            <ItemCount stock={item.stock} initial={1} />

            <div className="productCard__addCart">
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail