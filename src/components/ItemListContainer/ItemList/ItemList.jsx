import React from 'react'
import Item from './Item/Item'
import './ItemList.css'

function ItemList(props) {
    return (
        <>
            <div className="ItemListContainer">
                {
                    props.items.map(
                        cadaItem => {
                            return (<Item cadaItem={cadaItem} key={cadaItem.id} />)
                        }
                    )
                }
            </div>
        </>
    )
}

export default ItemList