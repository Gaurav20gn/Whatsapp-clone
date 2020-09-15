// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBqYELsFWxJwP4sXLoAmZCk_J1Yd8C5kNk",
    authDomain: "whatsapp-clone-9c663.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-9c663.firebaseio.com",
    projectId: "whatsapp-clone-9c663",
    storageBucket: "whatsapp-clone-9c663.appspot.com",
    messagingSenderId: "158019674711",
    appId: "1:158019674711:web:f58f277a35b5929221f912",
    measurementId: "G-LV1DQGL7FN"
  };
const firebaseApp= firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth= firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();
 export{ auth, provider};
 export default db;
 