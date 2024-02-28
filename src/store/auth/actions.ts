import { createAction } from "@reduxjs/toolkit";


export const signUp = createAction("REGISTER_USER");
export const checkingCredentials = createAction("CHECKING_CREDENTIALS");
export const login = createAction("LOGIN");
export const logout = createAction("LOGOUT");
