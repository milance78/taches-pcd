import React, { useEffect } from 'react'
import './OloVikingsInput.scss'
import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { updateIsOlo, updateIsVikings } from '../../../redux/features/newTaskSlice';

const OloVikingsInput = () => {
  const dispatch = useAppDispatch();
  const isOlo = useAppSelector(state => state.newTask.isOlo);
  const isVikings = useAppSelector(state => state.newTask.isVikings);

 const handleOloChange = (checked: boolean): void => {
    dispatch(updateIsOlo(checked));

    // If turning OFF Olo → also turn OFF Vikings
    if (!checked && isVikings) {
      dispatch(updateIsVikings(false));
    }
  };

  const handleVikingsChange = (checked: boolean): void => {
    dispatch(updateIsVikings(checked));

    // If turning ON Vikings → also turn ON Olo
    if (checked && !isOlo) {
      dispatch(updateIsOlo(true));
    }
  };


  return (
    <div className='olo-vikings-input'>
      <FormControlLabel
        control={
          <Switch
            checked={isOlo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleOloChange(e.target.checked)
            }
          />
        }
        label="Olo"
      />
      <FormControlLabel
        control={
          <Switch
            checked={isVikings}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleVikingsChange(e.target.checked)
            }
          />
        }
        label="Mobile Vikings"
      />
    </div>
  )
}

export default OloVikingsInput