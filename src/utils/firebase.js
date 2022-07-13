import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBPCLQlUQOwrU83qtgxYJjKEZ60iKj6e3E",
    authDomain: "netflix-clone-15ce6.firebaseapp.com",
    projectId: "netflix-clone-15ce6",
    storageBucket: "netflix-clone-15ce6.appspot.com",
    messagingSenderId: "722606997242",
    appId: "1:722606997242:web:8c86c64cbbc060865d9343",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };