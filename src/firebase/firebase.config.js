// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeFOkl9Bknuo_6n3ZW6nxIpU2P45rWSf8",
  authDomain: "auth-moha-milon-49b6c.firebaseapp.com",
  projectId: "auth-moha-milon-49b6c",
  storageBucket: "auth-moha-milon-49b6c.appspot.com",
  messagingSenderId: "417877894666",
  appId: "1:417877894666:web:f95d53afdac247320f61f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;