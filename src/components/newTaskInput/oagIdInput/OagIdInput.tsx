import React from 'react'
import './OagIdInput.scss'
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import TextField from '@mui/material/TextField';
import { updateOagID } from '../../../redux/features/newTaskSlice';

const OagIdInput = () => {

  const dispatch = useAppDispatch();
  const oadID = useAppSelector(state => state.newTask.oagID);

  return (
    <TextField
      className='oag-id-input'
      id="outlined-basic"
      label="OAG ID"
      variant="outlined"
      value={oadID}
      onChange={(e) => dispatch(updateOagID(e.target.value))}
    />
  )
}

export default OagIdInput