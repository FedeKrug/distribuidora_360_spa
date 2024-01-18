import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "./FirebaseConfig";



const googleProvider = new GoogleAuthProvider();
// const auth = getAuth();

export const signUpWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { user } = result;
        const { displayName, email, photoURL, uid } = user;
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,

        }
    } catch (error: any) {

        //const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }
    }
}

export const SignInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { user } = result;
        const { displayName, email, photoURL, uid } = user;
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,

        }
    } catch (error: any) {

        // const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }
    }
}


export const LoginWithEmailAndPassword = async (email: string, password: string) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        const { displayName, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,

        }

    } catch (error: any) {
        // const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage
        }
    }
}

export const registerWithEmailAndPassword = async (email: string, password: string) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const { displayName, photoURL, uid } = result.user;
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,

        }

    } catch (error: any) {
        // const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage
        }
    }
}