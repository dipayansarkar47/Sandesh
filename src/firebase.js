import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCyDuPECjPwVh1GMVXW-c3kxpUZGjP0MBo",
    authDomain: "sandesh-624ac.firebaseapp.com",
    projectId: "sandesh-624ac",
    storageBucket: "sandesh-624ac.appspot.com",
    messagingSenderId: "931631414821",
    appId: "1:931631414821:web:69b8dfbf201d50e01509cc"
}).auth();