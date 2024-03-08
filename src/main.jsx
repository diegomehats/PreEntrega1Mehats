import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CafeProvider } from './context/CafeProvider.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-5hNecgksySmR__3wFV5a0fVZFicrpRs",
  authDomain: "afrikacafe-e7d94.firebaseapp.com",
  databaseURL: "https://afrikacafe-e7d94-default-rtdb.firebaseio.com",
  projectId: "afrikacafe-e7d94",
  storageBucket: "afrikacafe-e7d94.appspot.com",
  messagingSenderId: "146454410507",
  appId: "1:146454410507:web:94713f00919e1d263f5e0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <CafeProvider> 
            <App />
        </CafeProvider>
    </React.StrictMode>
  
)
