import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCNmqLe1d9z6esEbyQQ4wcIFA9EUA-Z0H4",
  authDomain: "publicaciones-999c8.firebaseapp.com",
  projectId: "publicaciones-999c8",
  storageBucket: "publicaciones-999c8.appspot.com",
  messagingSenderId: "551474545342",
  appId: "1:551474545342:web:09126c401dd5f503f4d4ef"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
