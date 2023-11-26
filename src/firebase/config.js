// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHOzvUvppUwTS5ekKeAZzPjK_C1fsfPaU",
  authDomain: "rjs-proyects-final.firebaseapp.com",
  projectId: "rjs-proyects-final",
  storageBucket: "rjs-proyects-final.appspot.com",
  messagingSenderId: "259340248180",
  appId: "1:259340248180:web:b7580ac4440c5fc574dd21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app