import React, { createContext } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBas0ZNQMalsRF9XXWuZ_62dX7Frzj7TkA",
  authDomain: "c8-cyo-firebase-e6058.firebaseapp.com",
  projectId: "c8-cyo-firebase-e6058",
  storageBucket: "c8-cyo-firebase-e6058.appspot.com",
  messagingSenderId: "193981458786",
  appId: "1:193981458786:web:775e9f01ffb4f32724a43b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const FirebaseContext = createContext();

function FirebaseProvider(props) {
  const children = props.children;
  const theValues = { app };

  return (
    <FirebaseContext.Provider value={theValues}>
      {children}
    </FirebaseContext.Provider>
  );
}

export default FirebaseProvider;
