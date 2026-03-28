import React from 'react'
import './App.scss'
import Header from './components/header/Header'
import NewTaskInput from './components/newTaskInput/NewTaskInput'
import TasksList from './components/tasksList/TasksList'

const App = () => {
  return (
    <div className='app'>
      <NewTaskInput />
      <>
        <Header />
        <TasksList />
      </>
    </div>
  )
}

export default App