import { LoginWithEmailAndPassword, SignInWithGoogle, registerWithEmailAndPassword } from "../../config/Providers";
import { setItem } from "../../hooks/localStorage";
import {
    checkingCredentials, login, logout,
    //    signUp
} from "./actions";



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
        login();

    }
}

export const startRegisterWithEmailAndPassword = (email: string, password: string, displayName: string) => {
    return async (dispatch: any) => {
        dispatch(checkingCredentials());
        const result = await registerWithEmailAndPassword(email, password);
        const resp = { ...result, displayName }
        console.log(resp);
        if (!result.ok) return dispatch(logout(result.errorMessage));

        // setItem('auth', resp);
        // dispatch(signUp(resp));
        console.log({ result })

    }
}

export const startLoginWithEmailAndPassword = (email: string, password: string) => {
    return async (dispatch: any) => {
        dispatch(checkingCredentials());
        const result = await LoginWithEmailAndPassword(email, password);
        if (!result.ok) return dispatch(logout(result.errorMessage));
        setItem('auth', result);
        // dispatch(login(result));

    }
}