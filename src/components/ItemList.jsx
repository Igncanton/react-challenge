import React from 'react'
import Item from './Item'

function ItemList(props) {
    return (
        <div className="ItemListContainer">
            {
                props.items.map(
                    cadaItem => {
                        return (<Item cadaItem={cadaItem} key={cadaItem.id} />)
                    }
                )
            }
        </div>
    )
}

export default ItemList