import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB3hiPf0UjzeLcsdAH1C1n6RLxKJ69vQH8",
    authDomain: "bravanube.firebaseapp.com",
    projectId: "bravanube",
    storageBucket: "bravanube.appspot.com",
    messagingSenderId: "703008406555",
    appId: "1:703008406555:web:0d4ef8d75e5f7d2f978cbe"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
  export default firebase