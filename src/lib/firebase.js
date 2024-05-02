// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "telegram-clone-3e24f.firebaseapp.com",
    projectId: "telegram-clone-3e24f",
    storageBucket: "telegram-clone-3e24f.appspot.com",
    messagingSenderId: "281381197911",
    appId: "1:281381197911:web:75052511a03ea65df16b12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
