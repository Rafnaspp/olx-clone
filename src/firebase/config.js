import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJOKIC0pVi6gYPziW86NpQ5BovAV7WyzY",
  authDomain: "olx-clone-46469.firebaseapp.com",
  projectId: "olx-clone-46469",
  storageBucket: "olx-clone-46469.appspot.com",
  messagingSenderId: "769751131201",
  appId: "1:769751131201:web:43ff7c25feaeedb63392c0",
  measurementId: "G-DRK2DQ6K16"
};

  export default firebase.initializeApp(firebaseConfig)