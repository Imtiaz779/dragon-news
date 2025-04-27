// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvk-HiWW2J2KdagcEGrtwkinoQZRzJUCU",
  authDomain: "dragon-news-auth-7649b.firebaseapp.com",
  projectId: "dragon-news-auth-7649b",
  storageBucket: "dragon-news-auth-7649b.firebasestorage.app",
  messagingSenderId: "892736517115",
  appId: "1:892736517115:web:d9fa2cd7518356d34f915e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;