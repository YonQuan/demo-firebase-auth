import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp ({
  apiKey: "AIzaSyBY11OUr-PUa9H9sHoCtc1PjFBVHXfs7ik",
  authDomain: "react-auth-e4be8.firebaseapp.com",
  projectId: "react-auth-e4be8",
  storageBucket: "react-auth-e4be8.appspot.com",
  messagingSenderId: "656349448954",
  appId: "1:656349448954:web:893a58525aa103c4bcd743",
});

export const auth = app.auth()
export default app