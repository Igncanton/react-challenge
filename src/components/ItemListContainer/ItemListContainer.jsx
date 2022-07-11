import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({ greetings }) => {
    return (
        <>
            <p className='itemListP'>{greetings}</p>
            <ItemCount stock={5} initial={1} />
        </>
    );
}

export default ItemListContainer;