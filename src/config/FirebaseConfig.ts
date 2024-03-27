// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgF66OjKZMLQFNj8NRnyYNlAR66Y4VDz0",
    authDomain: "distribuidora-360.firebaseapp.com",
    projectId: "distribuidora-360",
    storageBucket: "distribuidora-360.appspot.com",
    messagingSenderId: "980085522173",
    appId: "1:980085522173:web:3cf6c27d2a996b91af0894",
    measurementId: "G-10KYNSR5GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const firebaseDB = getFirestore(app);