// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsrR-zUYHguTvD_Kcldo2iGOxMqEu3s_0",
  authDomain: "house-market-fee40.firebaseapp.com",
  projectId: "house-market-fee40",
  storageBucket: "house-market-fee40.appspot.com",
  messagingSenderId: "766626596522",
  appId: "1:766626596522:web:65e1bf9bdaba51adbd72d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();