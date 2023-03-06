import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "dev-nilson-readit.firebaseapp.com",
  projectId: "dev-nilson-readit",
  storageBucket: "dev-nilson-readit.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER,
  appId: process.env.NEXT_PUBLIC_FIREBASE_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
