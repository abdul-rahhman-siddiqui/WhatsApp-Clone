import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBd7VI_dHZpm7kS6alOqPzTbdVMKeza3Fc",
    authDomain: "whatsaap-clone-3b920.firebaseapp.com",
    projectId: "whatsaap-clone-3b920",
    storageBucket: "whatsaap-clone-3b920.appspot.com",
    messagingSenderId: "685901598063",
    appId: "1:685901598063:web:c89478ddb20cc274e96c9a",
    measurementId: "G-K4MBYPRFK1"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;