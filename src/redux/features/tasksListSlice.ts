import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewTaskState } from './newTaskSlice';



const initialState: NewTaskState[] = [];

export const tasksListSlice = createSlice({
  name: 'tasksList',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<NewTaskState>) => [...state, action.payload],

    deleteTask: (state, action: PayloadAction<string>) =>      state.filter(task => task.id !== action.payload),

    updateTask: (state, action: PayloadAction<NewTaskState>) =>
      state.map(task => task.id === action.payload.id ? action.payload : task),
  },
    
});

// Export actions
export const {
    addTask,   
    deleteTask,
    updateTask,
} = tasksListSlice.actions;

// Export reducer
export default tasksListSlice.reducer;