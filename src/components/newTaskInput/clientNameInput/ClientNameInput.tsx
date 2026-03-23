import React from 'react'
import './ClientNameInput.scss'
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import TextField from '@mui/material/TextField';
import { updateClientName } from '../../../redux/features/newTaskSlice';


const ClientNameInput = () => {
  const dispatch = useAppDispatch();
  const clientName = useAppSelector(state => state.newTask.clientName);

  return (
    <TextField
      className='client-name-input'
      id="outlined-basic"
      label="Nom du client"
      variant="outlined"
      value={clientName}
      onChange={(e) => dispatch(updateClientName(e.target.value))}
    />
  )
}

export default ClientNameInput