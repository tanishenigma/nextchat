import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3cCk8tG3p4-NPsRIZl6zm7eRMVNN_vkA",
  authDomain: "cosmichat-enigma.firebaseapp.com",
  projectId: "cosmichat-enigma",
  storageBucket: "cosmichat-enigma.firebasestorage.app",
  messagingSenderId: "168138103291",
  appId: "1:168138103291:web:b4c2fc678056888376135e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
