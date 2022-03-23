import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAqQPQMY0uVYapAmSTHvwpqrMn_kdbfd64",
    authDomain: "the-chat-app-588f0.firebaseapp.com",
    projectId: "the-chat-app-588f0",
    storageBucket: "the-chat-app-588f0.appspot.com",
    messagingSenderId: "452179671483",
    appId: "1:452179671483:web:ce99704c31c821eabc6c9e"
}).auth();