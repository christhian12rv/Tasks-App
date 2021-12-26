import React from 'react'
import './Item.css'

const Item = ({ item }) => {
    return (
        <div className="task-container">
            {item.title}
        </div>
    )
}

export default Item