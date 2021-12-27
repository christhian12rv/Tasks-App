import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CgPen, CgCheck } from 'react-icons/cg'

import Button from './Button'

import './ItemInfo.css'

const ItemInfo = ({ tasks, setTasks, handleTaskEdit }) => {
    const params = useParams()
    const task = tasks.find(task => task.id == params.taskId)

    const [title, setTitle] = useState(task.title)
    const [text, setText] = useState(task.text)
    const [showInputs, setShowInputs] = useState(false)

    const handleInputChange = (e) => {
        setTitle(e.target.value)
    }

    const handleTextAreaChange = (e) => {
        setText(e.target.value)
    }

    if (!showInputs) return (
        <>
            <div className='back-button-container'>
                <Link to='/'><Button>Voltar</Button></Link>
            </div>
            <div className="task-info-container">
                <div className="header">
                    <h2>{title}</h2>
                    <CgPen onClick={() => setShowInputs(true)} className='task-edit-button' />
                </div>
                <p>{text}</p>
            </div>
        </>
    )
    else return (
        <>
            <div className='back-button-container'>
                <Link to='/'><Button>Voltar</Button></Link>
            </div>
            <div className="task-info-edit">
                <div className="header-edit">
                    <input type='text' value={title} onChange={handleInputChange}></input>
                    <CgCheck onClick={() => {
                        setShowInputs(false);
                        handleTaskEdit(task.id, title, text);
                    }} className='task-edit-change-button' />
                </div>
                <textarea rows='10' onChange={handleTextAreaChange} value={text}></textarea>
            </div>
        </>
    )
}

export default ItemInfo