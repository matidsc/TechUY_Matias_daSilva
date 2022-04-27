import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyD79IJDB85Zrfcxa4s3DJvmt4i5bbxuCSs",
  authDomain: "techuy-786ea.firebaseapp.com",
  projectId: "techuy-786ea",
  storageBucket: "techuy-786ea.appspot.com",
  messagingSenderId: "93411199423",
  appId: "1:93411199423:web:b7ce4c66bae32ac867390a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
