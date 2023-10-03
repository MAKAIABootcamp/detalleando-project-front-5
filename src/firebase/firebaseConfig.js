// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKOCltNVY7gWKR110q-GC1wZ62z6FsVs0",
  authDomain: "detalleando-project.firebaseapp.com",
  projectId: "detalleando-project",
  storageBucket: "detalleando-project.appspot.com",
  messagingSenderId: "1005473691499",
  appId: "1:1005473691499:web:ba5370fbe8c2a0315a3e2e"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyC7kQ-F_aCQAaX_Z8CKhxLvjznO5109oAE",
//   authDomain: "detalleandopro.firebaseapp.com",
//   projectId: "detalleandopro",
//   storageBucket: "detalleandopro.appspot.com",
//   messagingSenderId: "694788880687",
//   appId: "1:694788880687:web:e6acce9401a64107fb49da"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fireStore = getFirestore(app);