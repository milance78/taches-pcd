import React from 'react'
import './TaskTypeInput.scss'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import { updateTaskType } from '../../../redux/features/newTaskSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/store'


const TaskTypeInput = () => {

  const dispatch = useAppDispatch();
  const taskType = useAppSelector(
    state => state.newTask.taskType
  );

  return (
    <FormControl
      className='task-type-input'
      fullWidth
    >
      <InputLabel id="demo-simple-select-label">Task type</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={taskType}
        label="Task type"
        onChange={(e) => dispatch(updateTaskType(e.target.value))}
      >
        <MenuItem value={'copper'}>Cuivre</MenuItem>
        <MenuItem value={'fiber'}>Fibre</MenuItem>
        <MenuItem value={'callback'}>Callback</MenuItem>
      </Select>
    </FormControl>
  )
}

export default TaskTypeInput