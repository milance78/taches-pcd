import React from 'react'
import './IsTerminatedInput.scss'
import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { updateIsTerminated } from '../../../redux/features/newTaskSlice';

const IsTerminatedInput = () => {

  const dispatch = useAppDispatch();
  const isTerminated = useAppSelector(state => state.newTask.isTerminated);

  return (
    <FormControlLabel className='is-terminated-input'
      control={
        <Switch
          checked={isTerminated}
          onChange={(e) =>
            dispatch(updateIsTerminated(e.target.checked))
          } />
      }
      label="Terminée" />
  )
}

export default IsTerminatedInput