import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { initialUsers } from "./dummyData";

const initialState = {
    users: initialUsers,
};

const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const newUser = {
                id: nanoid(),
                name: action.payload.name || '',
                color: action.payload.color || '#FFC0C0', // Default color
                notes: []
            };
            state.users.push(newUser);
        },
        addNote: (state, action) => {
            const { id, text } = action.payload;
            const user = state.users.find(user => user.id === id);
            if (user) {
                const newNote = {
                    text: text,
                    timestamp: new Date().toISOString(),
                };
                user.notes.push(newNote);
            }
        }
    }
});

// Selector function
export const selectUserById = (state, id) => state.userData.users.find(user => user.id === id);
export const { addUser, addNote } = userSlice.actions;
export default userSlice.reducer;
