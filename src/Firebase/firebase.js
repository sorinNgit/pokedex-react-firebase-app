import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDa8VbYyO5jXieCeWp3Mn_VesB2_mq18W0",
  authDomain: "proiect-fe.firebaseapp.com",
  projectId: "proiect-fe",
  storageBucket: "proiect-fe.appspot.com",
  messagingSenderId: "845277639267",
  appId: "1:845277639267:web:84b9eb8c3d2d98b5de3e56",
  databaseURL: "https://proiect-fe-default-rtdb.europe-west1.firebasedatabase.app"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
