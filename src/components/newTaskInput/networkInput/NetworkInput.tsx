import React from 'react'
import './NetworkInput.scss'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { Network, updateNetwork } from '../../../redux/features/newTaskSlice';

const NetworkInput = () => {


  const dispatch = useAppDispatch();
  const selectedNetwork = useAppSelector(state => state.newTask.network);

  return (
    <FormControl className='network-input'>
      <FormLabel id="demo-row-radio-buttons-group-label">Réseau</FormLabel>
      <RadioGroup
        // row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={e => dispatch(updateNetwork(e.target.value as Network))}
        value={selectedNetwork}
      >
        <FormControlLabel
          value="proximus"
          control={<Radio sx={{'& svg': {fontSize: 16,}}} />}
          label="Proximus" />

        <FormControlLabel
          value="scarlet"
          control={<Radio sx={{'& svg': {fontSize: 16,}}} />}
          label="Scarlet" />

        <FormControlLabel
          value="mobileVikings"
          control={<Radio sx={{'& svg': {fontSize: 16,}}} />}
          label="Mobile Vikings" />

        <FormControlLabel
          value="otherOlo"
          control={<Radio sx={{'& svg': {fontSize: 16,}}} />}
          label="Other OLO"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default NetworkInput