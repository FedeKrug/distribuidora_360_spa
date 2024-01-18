import { LoginWithEmailAndPassword, SignInWithGoogle, registerWithEmailAndPassword } from "../../config/Providers";
import { checkingCredentials, login, logout, signUp } from "./authSlice"
import { setItem } from "../../utils/localStorage";


export const checkingAuthentication = () => {
    return async (dispatch: any) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch: any) => {

        dispatch(checkingCredentials());
        const result = await SignInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));
        setItem('auth', result);
        dispatch(login(result));

    }
}

export const startRegisterWithEmailAndPassword = (email: string, password: string) => {
    return async (dispatch: any) => {
        dispatch(checkingCredentials());
        const result = await registerWithEmailAndPassword(email, password);
        if (!result.ok) return dispatch(logout(result.errorMessage));

        setItem('auth', result);
        dispatch(signUp(result));

    }
}

export const startLoginWithEmailAndPassword = (email: string, password: string) => {
    return async (dispatch: any) => {
        dispatch(checkingCredentials());
        const result = await LoginWithEmailAndPassword(email, password);
        if (!result.ok) return dispatch(logout(result.errorMessage));
        setItem('auth', result);
        dispatch(login(result));

    }
}