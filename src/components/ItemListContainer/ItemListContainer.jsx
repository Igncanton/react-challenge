import './ItemListContainer.css'

const ItemListContainer = ({ greetings }) => {
    return (
        <p className='itemListP'>{greetings}</p>
    );
}

export default ItemListContainer;