import { configureStore } from '@reduxjs/toolkit';
import sensorReducer from './slices/sensorSlice';

export const store = configureStore({
  reducer: {
    sensor: sensorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

