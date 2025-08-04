// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_B_Nb_J2oNyueeBE3OnJKmY8rS1ZxS3U",
  authDomain: "zowiweb.firebaseapp.com",
  projectId: "zowiweb",
  storageBucket: "zowiweb.firebasestorage.app",
  messagingSenderId: "38401403638",
  appId: "1:38401403638:web:cbf441adf3c71f922c9ad7",
  measurementId: "G-TGMF36PEGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
