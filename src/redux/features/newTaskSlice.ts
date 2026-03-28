import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { clear } from 'console';

type TaskType = 'copper' | 'fiber' | 'callback';
export type Network = 'proximus' | 'scarlet' | 'mobileVikings' | 'otherOlo';
export type Infrastructure = 'proximus' | 'unifiber' | 'fiberKlaar' | 'goFiber';

// Define a type for the slice state
export interface NewTaskState {
  id: string;
  taskType: TaskType;
  network: Network;
  infrastructure: Infrastructure;
  oagID: string;
  clientName: string;
  action: string;
  addressConfirmed: boolean;
  isTerminated: boolean;
}

const initialState: NewTaskState = {
  id: '',
  taskType: 'copper',
  network: 'proximus',
  infrastructure: 'proximus',
  oagID: '',
  clientName: '',
  action: '',
  addressConfirmed: false,
  isTerminated: false,
};

export const newTaskSlice = createSlice({
  name: 'newTask',
  initialState,
  reducers: {
    updateId: (state, action: PayloadAction<string>) => ({ ...state, id: action.payload }),

    updateTaskType: (state, action: PayloadAction<TaskType>) =>
      ({ ...state, taskType: action.payload }),

    updateNetwork: (state, action: PayloadAction<Network>) =>
      ({ ...state, network: action.payload }),

    updateInfrastructure: (state, action: PayloadAction<Infrastructure>) =>
      ({ ...state, infrastructure: action.payload }),

    updateOagID: (state, action: PayloadAction<string>) => ({ ...state, oagID: action.payload }),

    updateClientName: (state, action: PayloadAction<string>) => ({ ...state, clientName: action.payload }),

    updateAction: (state, action: PayloadAction<string>) => ({ ...state, action: action.payload }),

    updateAddressConfirmed: (state, action: PayloadAction<boolean>) => ({ ...state, addressConfirmed: action.payload }),

    updateIsTerminated: (state, action: PayloadAction<boolean>) => ({...state, isTerminated: action.payload }),

    clearTask: () => initialState,
  },
});

// Export actions
export const {
  updateId,
  updateTaskType,
  updateNetwork,
  updateInfrastructure,
  updateOagID,
  updateAction, 
  updateClientName,
  updateAddressConfirmed,
  updateIsTerminated,

  clearTask,
} = newTaskSlice.actions;

// Export reducer
export default newTaskSlice.reducer;