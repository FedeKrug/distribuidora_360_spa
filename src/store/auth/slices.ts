import { useReducer } from "react";
import { AuthType } from "./types";
import { createReducer } from "@reduxjs/toolkit";
import { checkingCredentials, login, logout, signUp } from "./actions";

const initialState: AuthType = {
    email: "",
    uid: null,
    displayName: "",
    status: "not-authenticated",
    errorMessage: null,
    photoURL: null,
}

const authSlice = createReducer(
    initialState, (builder) => {
        builder
            .addCase(signUp, (state, { payload }) => {
                state.status = 'registered';
                state.uid = payload.uid;
                state.email = payload.email;
                state.displayName = payload.displayName;
                state.photoURL = payload.photoURL;
                state.errorMessage = null;
            })

            .addCase(checkingCredentials, (state) => {
                state.status = 'checking';
            })
            .addCase(login, (state, { payload }) => {
                state.status = 'authenticated';
                state.uid = payload.uid;
                state.email = payload.email;
                state.displayName = payload.displayName;
                state.photoURL = payload.photoURL;
                state.errorMessage = null;
            })
            .addCase(logout, (state, { payload }) => {
                state.status = 'not-authenticated';
                state.uid = null;
                state.email = null;
                state.displayName = null;
                state.photoURL = null;
                state.errorMessage = payload.errorMessage;
            })
    }
)