import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCT9Cwat0CBwgbnED6wlgQq657xOuBYRS0',
  authDomain: 'twitter-clone-udemy-7a084.firebaseapp.com',
  projectId: 'twitter-clone-udemy-7a084',
  storageBucket: 'twitter-clone-udemy-7a084.appspot.com',
  messagingSenderId: '589076613402',
  appId: '1:589076613402:web:62d23633fa69437ea184a3',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
