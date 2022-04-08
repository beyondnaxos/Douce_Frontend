import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDWF8xdEC6jOlsaawzM4sT3XzvLtttttC4",
    authDomain: "beyondchat-ca368.firebaseapp.com",
    projectId: "beyondchat-ca368",
    storageBucket: "beyondchat-ca368.appspot.com",
    messagingSenderId: "820291626272",
    appId: "1:820291626272:web:c666658a945802d6c36345",
    measurementId: "G-6FVZKCV3QL"
})

const db = firebaseApp.firestore()

const auth = firebaseApp.auth()

export { db, auth }