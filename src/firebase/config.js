import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDpF1485ykFJf8D55s4OSvu9iQwDYHAzus',
  authDomain: 'food-aap-830c9.firebaseapp.com',
  projectId: 'food-aap-830c9',
  storageBucket: 'food-aap-830c9.appspot.com',
  messagingSenderId: '1085004078245',
  appId: '1:1085004078245:web:bd6d1172b03f47e100c14c',
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
