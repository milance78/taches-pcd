import React from 'react'
import './TasksList.scss'
import { useAppSelector } from '../../redux/store'

const TasksList = () => {
  const tasksList = useAppSelector(state => state.tasksList);

  return (
    <div className='tasks-list'>
      {
        tasksList.map(
          task =>
            <ul key={task.id} className='task-item'>
              <li className='task-type'> {task.taskType} </li>
              <li className='is-olo'> {task.isOlo ? 'Olo' : 'Non Olo'} </li>
              <li className='is-vikings'> {task.isVikings ? 'Mobile Vikings' : 'Non Mobile Vikings'} </li>
              <li className='oag-id'> {task.oagID} </li>
              <li className='client-name'> {task.clientName} </li>
              <li className='action'> {task.action} </li>
              <li className='is-terminated'> {task.isTerminated ? 'Tache finalisée' : 'En cours'} </li>    
            </ul>

        )}
    </div>
  )
}

export default TasksList