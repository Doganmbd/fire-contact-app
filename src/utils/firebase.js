// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey: "AIzaSyDWf9IZbHTLHukGJj9QLSFnRhHeMrMcHJ8",
  authDomain: "fire-contact-29303.firebaseapp.com",
  databaseURL: "https://fire-contact-base-project-default-rtdb.firebaseio.com",
  projectId: "fire-contact-29303",
  storageBucket: "fire-contact-29303.appspot.com",
  messagingSenderId: "781733244486",
  appId: "1:781733244486:web:0890101eb8aa3ffe276447"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;

