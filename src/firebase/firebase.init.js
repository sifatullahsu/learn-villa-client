/* 
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

const app = initializeApp(firebaseConfig);

export default app; 
*/


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAid4jfyWj7I8eA2uf31SGXFmWiDhLyqfE",
  authDomain: "learn-villa-83811.firebaseapp.com",
  projectId: "learn-villa-83811",
  storageBucket: "learn-villa-83811.appspot.com",
  messagingSenderId: "265238518623",
  appId: "1:265238518623:web:64762fac5eabe2d838b4ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;