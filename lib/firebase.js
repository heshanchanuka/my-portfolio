import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // paste your Firebase config here apiKey: "AIzaSyDWmRidkpwhBdkYmBvipWWkGy4clCfIn-s",
  authDomain: "heshaboyweb.firebaseapp.com",
  projectId: "heshaboyweb",
  storageBucket: "heshaboyweb.firebasestorage.app",
  messagingSenderId: "641871065749",
  appId: "1:641871065749:web:53ba5356b9e6ae1998e19c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
