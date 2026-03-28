import React from 'react'
import './FiberInfrastructureInput.scss'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { Infrastructure, updateInfrastructure } from '../../../redux/features/newTaskSlice';

const FiberInfrastructureInput = () => {

  const dispatch = useAppDispatch();
  const infrastructure = useAppSelector(state => state.newTask.infrastructure);

  return (
    <div className='fiber-infrastructure-input'>

      <FormControl className='network-input'>
        <FormLabel id="demo-row-radio-buttons-group-label">Infrastructure fibre</FormLabel>
        <RadioGroup
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group" 
          onChange={e => dispatch(updateInfrastructure(e.target.value as Infrastructure))}
          value={infrastructure}
        >
          <FormControlLabel
            value="proximus"
            control={<Radio sx={{'& svg': {fontSize: 16,}}} />}
            label="Proximus" />

          <FormControlLabel
            value="unifiber"
            control={<Radio sx={{'& svg': {fontSize: 16,}}} />}
            label="Unifiber" />

          <FormControlLabel
            value="fiberKlaar"
            control={<Radio sx={{'& svg': {fontSize: 16,}}} />}
            label="Fiber Klaar" />

          <FormControlLabel
            value="goFiber"
            control={<Radio sx={{'& svg': {fontSize: 16,}}} />}
            label="Go Fiber"
          />
        </RadioGroup>
      </FormControl>

    </div>
  )
}

export default FiberInfrastructureInput