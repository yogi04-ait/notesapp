import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { loadState, saveState } from './localStorage';

//Load the intial state
const preloadedState = loadState();

const store = configureStore({
    reducer: {
        userData: userReducer
    },
    preloadedState
});

// Subscribe to store changes and save state to local storage
store.subscribe(() => {
    saveState({
        userData: store.getState().userData,
    });
});

export default store;
