import React from 'react'
import { Link } from 'react-router-dom'
import { CgClose, CgInfo, CgPen } from 'react-icons/cg'

import './Item.css'

const Item = ({ item, handleTaskClick, handleTaskDeletion }) => {
    return (
        <div className="task-container" style={item.completed ? { borderLeft: '5px solid chartreuse' } : { borderLeft: '0px' }}>
            <div className="task-title" onClick={() => handleTaskClick(item.id)} >
                {item.title}
            </div>
            <div className="buttons-container">
                <CgClose className='delete-task' onClick={() => handleTaskDeletion(item.id)} style={{ strokeWidth: "2" }} />
                <Link to={'/' + item.id}> <CgInfo className='info-task' style={{ strokeWidth: "1" }} /></Link>
            </div>
        </div>
    )
}

export default Item