import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';     
import { getStorage } from 'firebase/storage';

import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBqfJXIAm1kXGmtLt_H6D9Rn8xNR74le8Y",
    authDomain: "ravehub-birthday.firebaseapp.com",
    databaseURL: "https://ravehub-birthday-default-rtdb.firebaseio.com",
    projectId: "ravehub-birthday",
    storageBucket: "ravehub-birthday.appspot.com",
    messagingSenderId: "370315325048",
    appId: "1:370315325048:web:56c3847d68b8afb930478d",
    measurementId: "G-JT16PPPSGC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signOut = () => auth.signOut();



// const app = firebase.initializeApp(firebaseConfig);
 
const storage = getStorage();


export { app, auth, db, signOut,storage };
