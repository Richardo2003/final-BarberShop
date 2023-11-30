// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKXPEouGuP5T9OPeBIU73RqSN2bG3oR60",
  authDomain: "barbershop-fe.firebaseapp.com",
  databaseURL: "https://barbershop-fe-default-rtdb.firebaseio.com",
  projectId: "barbershop-fe",
  storageBucket: "barbershop-fe.appspot.com",
  messagingSenderId: "533238429420",
  appId: "1:533238429420:web:7e5e28f44a5fae8aee97c9",
  measurementId: "G-GWY9LNX3DD"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);