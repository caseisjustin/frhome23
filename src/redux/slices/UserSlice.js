import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    currentUser: null,
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        register: (state, action) => {
            const user = action.payload;
            state.users.push(user);
            state.currentUser = user;
            state.isAuthenticated = true;
        },
        login: (state, action) => {
            const { username, password } = action.payload;
            const foundUser = state.users.find(
                (user) => user.username === username && user.password === password
            );
            if (foundUser) {
                state.currentUser = foundUser;
                state.isAuthenticated = true;
            } else {
                state.isAuthenticated = false;
            }
        },
        logout: (state) => {
            state.currentUser = null;
            state.isAuthenticated = false;
        },
    },
});

export const { register, login, logout } = userSlice.actions;

export default userSlice.reducer;
