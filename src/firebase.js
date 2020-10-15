import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAiLYDXbepPm_TloXMGsP9AxM-Bpdq8-Ak",
    authDomain: "clone-36cd5.firebaseapp.com",
    databaseURL: "https://clone-36cd5.firebaseio.com",
    projectId: "clone-36cd5",
    storageBucket: "clone-36cd5.appspot.com",
    messagingSenderId: "736600500309",
    appId: "1:736600500309:web:0f89be43277e31bc658cdc",
    measurementId: "G-6CPDXPGPDF"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db,auth };