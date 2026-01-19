// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDhdnLReGo_7L_jMDgIBnG_S8-SENaQ-c",
  authDomain: "social-serve-ab421.firebaseapp.com",
  projectId: "social-serve-ab421",
  storageBucket: "social-serve-ab421.firebasestorage.app",
  messagingSenderId: "575924371324",
  appId: "1:575924371324:web:1f9ec2a04715ce3996aef9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
