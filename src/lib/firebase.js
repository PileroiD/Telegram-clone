import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "telegram-clone-3e24f.firebaseapp.com",
    projectId: "telegram-clone-3e24f",
    storageBucket: "telegram-clone-3e24f.appspot.com",
    messagingSenderId: "281381197911",
    appId: "1:281381197911:web:75052511a03ea65df16b12",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
