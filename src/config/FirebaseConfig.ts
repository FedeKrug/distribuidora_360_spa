// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSfPVPPf2LGhkuYyoYUsMSedYXMPK84uQ",
    authDomain: "destino-pinamar-ok.firebaseapp.com",
    projectId: "destino-pinamar-ok",
    storageBucket: "destino-pinamar-ok.appspot.com",
    messagingSenderId: "590282027534",
    appId: "1:590282027534:web:2854c28ec5a0f109f0025f",
    measurementId: "G-WMJRSR0J1N"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const firebaseDB = getFirestore(app);