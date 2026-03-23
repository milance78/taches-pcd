import React from 'react'
import './App.scss'
import Header from './components/header/Header'
import NewTaskInput from './components/newTaskInput/NewTaskInput'
import TasksList from './components/tasksList/TasksList'

const App = () => {
  return (
    <div>
      <Header />
      <main className='main'>
        <NewTaskInput />
        <TasksList />
      </main>
    </div>
  )
}

export default App