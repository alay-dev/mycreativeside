import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKxT3V_wkRKb3XNBw26P1NJmZ1DrCzkSU",
  authDomain: "blog-57360.firebaseapp.com",
  projectId: "blog-57360",
  storageBucket: "blog-57360.appspot.com",
  messagingSenderId: "518608841425",
  appId: "1:518608841425:web:e02ce45ddc079bf35073f0",
};
// Initialize Firebase

// export const facebookProvider = firebase.auth.FacebookAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebaseConfig;
