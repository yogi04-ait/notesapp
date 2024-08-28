// localStorage.js

const LOCAL_STORAGE_KEY = 'reduxState'; // Define your key for local storage

// Load the initial state from localStorage
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Could not load state from localStorage', err);
        return undefined;
    }
};

// Save the state to localStorage whenever the state changes
export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(LOCAL_STORAGE_KEY, serializedState);
    } catch (err) {
        console.error('Could not save state to localStorage', err);
    }
};
