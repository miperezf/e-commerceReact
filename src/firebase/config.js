// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU0ak2cnknPzeuCZ0sjx5TcqM7LH0BlCE",
  authDomain: "vo1dshop.firebaseapp.com",
  projectId: "vo1dshop",
  storageBucket: "vo1dshop.appspot.com",
  messagingSenderId: "656914127478",
  appId: "1:656914127478:web:9ef329e7aa73987ce71d57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);