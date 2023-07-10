import { configureStore } from '@reduxjs/toolkit'; // Importing configureStore from Redux Toolkit
import userReducer from '../store/features/UserSlice';  // Importing the userReducer from the UserSlice file

// Creating the Redux store with the userReducer as the reducer
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Defining the RootState type
export type RootState = ReturnType<typeof store.getState>;
// Defining the AppDispatch type
export type AppDispatch = typeof store.dispatch;
