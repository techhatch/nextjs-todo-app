import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"

initializeApp({
    apiKey:"AIzaSyCGAc6_3FF71CQ01TxQjkqH6wp0Jl2KlkI",
    authDomain:"next-js-todos-app-15b2d.firebaseapp.com",
    projectId:"next-js-todos-app-15b2d",
    storageBucket:"next-js-todos-app-15b2d.appspot.com",
    messagingSenderId:"844472587458",
    appId:"1:844472587458:web:ebcfe3cf3feb97a817175b",
 });

const firestore = getFirestore();
export {firestore}