import { useReducer } from "react";
import { AuthType } from "./types";
import { createReducer } from "@reduxjs/toolkit";
import { registerUser } from "./actions";

const initialState: AuthType = {
    email: "",
    id: null,
    password: "",
    username: "",
    status: "not-authenticated"
}

const authReducer = createReducer(
    initialState, (builder) => {
        builder
            .addCase(registerUser, (state, action) => {
                state.status = "authenticated";
                state.email = action.payload;
                state.password = action.payload;
                state.id = action.payload;
                state.username = action.payload;
            })
    }
)