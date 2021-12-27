import React from 'react'
import Item from './Item'

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
    return (
        <>
            {tasks.map((task) =>
                <Item
                    key={task.id}
                    item={task}
                    handleTaskClick={handleTaskClick}
                    handleTaskDeletion={handleTaskDeletion}
                />
            )}
        </>
    )
}

export default Tasks