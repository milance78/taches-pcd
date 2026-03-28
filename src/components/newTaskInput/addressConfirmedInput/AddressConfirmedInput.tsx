import React from 'react'
import './AddressConfirmedInput.scss'
import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { updateAddressConfirmed } from '../../../redux/features/newTaskSlice';

const AddressConfirmedInput = () => {

  const dispatch = useAppDispatch();
  const addressConfirmed = useAppSelector(state => state.newTask.addressConfirmed);

  return (
    <FormControlLabel className='address-confirmed-input'
      control={
        <Switch
          checked={addressConfirmed}
          onChange={(e) =>
            dispatch(updateAddressConfirmed(e.target.checked))
          } />
      }
      label="Adresse confirmée" />
  )
}

export default AddressConfirmedInput