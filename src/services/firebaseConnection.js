import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDwjk0GcSgVMCJYcoqNtYUpgOOMQQPxqDk",
    authDomain: "financa-25023.firebaseapp.com",
    projectId: "financa-25023",
    storageBucket: "financa-25023.appspot.com",
    messagingSenderId: "632384703051",
    appId: "1:632384703051:web:5491a6477d8b65ff539bce"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;