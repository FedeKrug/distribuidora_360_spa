import { /*PayloadAction,*/ createSlice } from "@reduxjs/toolkit";



type AuthStateType = {
    status: 'checking' | 'not-authenticated' | 'authenticated' | 'registered';
    uid: string | null;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    errorMessage: string | null;
}

const initialState: AuthStateType = {
    status: "not-authenticated",
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
        signUp: (state, { payload }) => {
            state.status = 'registered';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        }

    }

})

export const { login, logout, checkingCredentials, signUp } = authSlice.actions;
export default authSlice.reducer;