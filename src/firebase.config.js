import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore" //firestore je database

const firebaseConfig = {
  apiKey: "AIzaSyAdVVe9FS8RjhncOV6s_4Nj37s_cihCKrQ",
  authDomain: "house-marketplace-app-c29f3.firebaseapp.com",
  projectId: "house-marketplace-app-c29f3",
  storageBucket: "house-marketplace-app-c29f3.appspot.com",
  messagingSenderId: "1006510109805",
  appId: "1:1006510109805:web:08165cdb90e363bc8dbb64",
};

initializeApp(firebaseConfig);
export const db = getFirestore()
