// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4y-KvqcCp7ZKwvjj1MovceDeecz7hDO4",
  authDomain: "otp-verifiy-9d88a.firebaseapp.com",
  projectId: "otp-verifiy-9d88a",
  storageBucket: "otp-verifiy-9d88a.appspot.com",
  messagingSenderId: "805694385692",
  appId: "1:805694385692:web:a895ca9fab0d38d2b9f9d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
