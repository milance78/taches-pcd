import React from 'react'
import './NewTaskInput.scss'
import TaskTypeInput from './taskTypeInput/TaskTypeInput';
import OagIdInput from './oagIdInput/OagIdInput';
import ClientNameInput from './clientNameInput/ClientNameInput';
import ActionInput from './actionInput/ActionInput';
import IsTerminatedInput from './isTerminatedInput/IsTerminatedInput';
import Button from '@mui/material/Button';
import { addTask } from '../../redux/features/tasksListSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { clearTask, updateId } from '../../redux/features/newTaskSlice';
import NetworkInput from './networkInput/NetworkInput';
import FiberInfrastructureInput from './fiberInfrastructureInput/FiberInfrastructureInput';
import AddressConfirmedInput from './addressConfirmedInput/AddressConfirmedInput';

const NewTaskInput = () => {

  const dispatch = useAppDispatch();
  const newTask = useAppSelector(state => state.newTask);
  const taskType = useAppSelector(state => state.newTask.taskType);

  const handleAddTask = () => {
    dispatch(updateId(crypto.randomUUID()));
    dispatch(addTask(newTask));
    dispatch(clearTask());
  }

  return (
    <div className='new-task-input'>
      <TaskTypeInput />
      <div className='network-infrastructure'>
        <NetworkInput />
        {taskType === 'fiber' && <FiberInfrastructureInput />}
      </div>
      <OagIdInput />
      <ClientNameInput />
      <ActionInput />
      <AddressConfirmedInput />
      <IsTerminatedInput />
      <Button
        className='submit-button'
        variant="contained"
        color="primary"
        onClick={handleAddTask}>
        Valider
      </Button>
    </div>

  )
}

export default NewTaskInput