// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDE43LrhkN1sIOo6q7nuM36PipXXdSPcsg",
  authDomain: "netflix-clone-961fc.firebaseapp.com",
  projectId: "netflix-clone-961fc",
  storageBucket: "netflix-clone-961fc.appspot.com",
  messagingSenderId: "372192688571",
  appId: "1:372192688571:web:459e1637e8ce98b026ec9e",
  measurementId: "G-G6MBM417MW"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)