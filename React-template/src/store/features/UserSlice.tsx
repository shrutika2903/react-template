import { createSlice, PayloadAction } from '@reduxjs/toolkit'; //Import from redux toolkit

interface UserState {
    username: string; //DataType for username field
}

const initialState: UserState = {
    username: '',  // Initial state for the username field
}

const userSlice = createSlice({
    name: 'user', //Name of the slice
    initialState, //Initial State for slice
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload; //Reducer function to set username field
        },
    },
});

export const { setUsername } = userSlice.actions; // Exporting the setUsername
export default userSlice.reducer; // Exporting the reducer function
