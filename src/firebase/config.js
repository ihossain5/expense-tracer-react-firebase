import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzEV_9MHCTvLyTPsKg7Rs-uJIxBBpHf1k",
  authDomain: "finance-tracker-13b63.firebaseapp.com",
  projectId: "finance-tracker-13b63",
  storageBucket: "finance-tracker-13b63.appspot.com",
  messagingSenderId: "422010528686",
  appId: "1:422010528686:web:82e5526e06a48d2bb61e3f",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
