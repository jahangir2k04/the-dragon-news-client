// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpdIm7OU8qlMkkudvy6JOfrKE_Qz1NFtc",
  authDomain: "the-dragon-news-937a1.firebaseapp.com",
  projectId: "the-dragon-news-937a1",
  storageBucket: "the-dragon-news-937a1.appspot.com",
  messagingSenderId: "648063399401",
  appId: "1:648063399401:web:d6ccfada2a3e64e06f8778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;