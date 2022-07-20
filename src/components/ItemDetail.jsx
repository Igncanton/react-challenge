import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {
    return (
        <div className="productCard" key={item.id}>
            <h2 class="detailCard__title">{item.title}</h2>
            <p>{item.detail}</p>
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