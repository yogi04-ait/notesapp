import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    users: [],
    colors: [
        "#B38BFA",
        "#FF79F2",
        "#43E6FC",
        "#F19576",
        "#0047FF",
        "#6691FF"
    ]
};

const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const newUser = {
                id: nanoid(),
                name: action.payload.name || '',
                color: action.payload.color || state.colors[0],
                notes: []
            };
            state.users.push(newUser);
        },
        
    }
});

export const { addUser, setUserColor } = userSlice.actions;
export default userSlice.reducer;
