import React from 'react'
import './ActionInput.scss'
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import TextField from '@mui/material/TextField';
import { updateAction } from '../../../redux/features/newTaskSlice';

const ActionInput = () => {
  const dispatch = useAppDispatch();
  const action = useAppSelector(state => state.newTask.action);

  return (
    <TextField 
      className='action-input'
      id="outlined-basic"
      label="Action"
      variant="outlined"
      value={action}
      multiline
      rows={4}
      onChange={(e) => dispatch(updateAction(e.target.value))}
    />
  )
}

export default ActionInput