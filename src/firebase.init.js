// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDsGicWSF87p9Z2npLm235Bp_7bfS8LRU",
  authDomain: "genius-car-34b86.firebaseapp.com",
  projectId: "genius-car-34b86",
  storageBucket: "genius-car-34b86.appspot.com",
  messagingSenderId: "424776842614",
  appId: "1:424776842614:web:9fe439f67b503df8cdce57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
