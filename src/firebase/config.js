// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmaYlcGbt2Yh_8z-CTsDnUaIsSyf9Z8KE",
  authDomain: "ch-react-4e4c5.firebaseapp.com",
  projectId: "ch-react-4e4c5",
  storageBucket: "ch-react-4e4c5.appspot.com",
  messagingSenderId: "275875710829",
  appId: "1:275875710829:web:95c20ffa9f23f47a31fc64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app;
}