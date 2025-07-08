// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAh_zwmmtw88M4FinP3wXECwp0k0BitZYE",
  authDomain: "tienda-de-ropa-82375.firebaseapp.com",
  projectId: "tienda-de-ropa-82375",
  storageBucket: "tienda-de-ropa-82375.firebasestorage.app",
  messagingSenderId: "48078853161",
  appId: "1:48078853161:web:91962e3d50cb81e28b3838",
  measurementId: "G-24RW1JLLZV",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
