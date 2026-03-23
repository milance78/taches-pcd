import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { clear } from 'console';

type TaskType = 'cuivre' | 'fibre' | 'callback';

// Define a type for the slice state
export interface NewTaskState {
  id: string;
  isOlo: boolean;
  isVikings: boolean;
  taskType: TaskType;
  oagID: string;
  clientName: string;
  action: string;
  isTerminated: boolean;
}

const initialState: NewTaskState = {
  id: '',
  taskType: 'cuivre',
  isOlo: false,
  isVikings: false,
  oagID: '',
  clientName: '',
  action: '',
  isTerminated: false,
};

export const newTaskSlice = createSlice({
  name: 'newTask',
  initialState,
  reducers: {
    updateId: (state, action: PayloadAction<string>) => ({ ...state, id: action.payload }),

    updateTaskType: (state, action: PayloadAction<TaskType>) =>
      ({ ...state, taskType: action.payload }),

    updateIsOlo: (state, action: PayloadAction<boolean>) => ({ ...state, isOlo: action.payload }),

    updateIsVikings: (state, action: PayloadAction<boolean>) => ({ ...state, isVikings: action.payload }),

    updateOagID: (state, action: PayloadAction<string>) => ({ ...state, oagID: action.payload }),

    updateClientName: (state, action: PayloadAction<string>) => ({ ...state, clientName: action.payload }),

    updateAction: (state, action: PayloadAction<string>) => ({ ...state, action: action.payload }),

    updateIsTerminated: (state, action: PayloadAction<boolean>) => ({...state, isTerminated: action.payload }),

    clearTask: () => initialState,
  },
});

// Export actions
export const {
  updateId,
  updateTaskType,
  updateIsVikings,
  updateIsOlo,
  updateOagID, 
  updateClientName, 
  updateIsTerminated,
  updateAction,
  clearTask,
} = newTaskSlice.actions;

// Export reducer
export default newTaskSlice.reducer;