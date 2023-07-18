import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyHFeJvUCZJ_b8gWpdSvKlQkPCmg2GWdo",
  authDomain: "little-and-little-29a59.firebaseapp.com",
  projectId: "little-and-little-29a59",
  storageBucket: "little-and-little-29a59.appspot.com",
  messagingSenderId: "767672902560",
  appId: "1:767672902560:web:8158eb8495e3d1f3a2bac5",
  measurementId: "G-ERS4E2KYLL",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
