//firebase used ===> Firebase Tutorial
//appname in firebase ===>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBERCxdFKuYe3249k7Jv_QmYK3ASMZZF2M",
    authDomain: "fir-tutorial-b9dd9.firebaseapp.com",
    projectId: "fir-tutorial-b9dd9",
    storageBucket: "fir-tutorial-b9dd9.appspot.com",
    messagingSenderId: "513830680873",
    appId: "1:513830680873:web:724c340d0dd57f392e5f38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { app, db }