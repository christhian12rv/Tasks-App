import React from 'react'
import Item from './Item'

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map(task => <Item item={task} />)}
        </>
    )
}

export default Tasks