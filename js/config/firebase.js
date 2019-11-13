import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCSs5ITMFZlsapDirI6_iokRLlIVafKYlI",
    authDomain: "message-maker-93174.firebaseapp.com",
    databaseURL: "https://message-maker-93174.firebaseio.com",
    projectId: "message-maker-93174",
    storageBucket: "message-maker-93174.appspot.com",
    messagingSenderId: "212428106415",
    appId: "1:212428106415:web:97fc133cad86641d52825a",
    measurementId: "G-FTLRSEPR3N"
};


firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;