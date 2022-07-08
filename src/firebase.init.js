// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEK233gtT9a0g0HF-VXy0BBzHchgribZA",
  authDomain: "ema-john-9e992.firebaseapp.com",
  projectId: "ema-john-9e992",
  storageBucket: "ema-john-9e992.appspot.com",
  messagingSenderId: "242728750238",
  appId: "1:242728750238:web:ad189315253a870ef1ff8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;