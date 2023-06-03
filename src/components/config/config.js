// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as database from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_lvvFuX1WFY_sqm4GUfMNj5ORWwiCoyU",
  authDomain: "rainbow-site-4e584.firebaseapp.com",
  databaseURL: "https://rainbow-site-4e584-default-rtdb.firebaseio.com",
  projectId: "rainbow-site-4e584",
  storageBucket: "rainbow-site-4e584.appspot.com",
  messagingSenderId: "1061181830065",
  appId: "1:1061181830065:web:50b36e71ba28ba5d59c390",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = database.getDatabase(app);
