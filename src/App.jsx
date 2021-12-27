import React, { useState, useEffect } from 'react'
import "./App.css"

import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from 'axios'

import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Header from './components/Header'
import ItemInfo from './components/ItemInfo'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar programação',
      completed: false
    },
    {
      id: 2,
      title: 'Ler livros',
      completed: true
    }
  ])

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
      const dataWithText = data.map(d => {
        return { ...d, text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis sed quo non earum iusto quia.' }
      })
      setTasks(dataWithText)
    }

    fetchTasks()
  }, [])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId)
        return { ...task, completed: !task.completed }
      return task
    })

    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks,
    {
      title: taskTitle,
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis sed quo non earum iusto quia.',
      id: uuidv4(),
      completed: false
    }
    ]

    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks)
  }

  const handleTaskEdit = (taskId, title, text) => {
    console.log("asdf")
    const newTasks = tasks.map(task => {
      if (taskId == task.id)
        return { ...task, title: title, text: text }
      return task
    })
    setTasks(newTasks)
  }

  // const message = 'Hello World!'
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
            </>
          } />
          <Route path='/:taskId' element={<ItemInfo tasks={tasks} setTasks={setTasks} handleTaskEdit={handleTaskEdit} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App