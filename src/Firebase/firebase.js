import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "",
  authDomain: "deluxegalaxyios.firebaseapp.com",
  projectId: "deluxegalaxyios",
  storageBucket: "deluxegalaxyios.appspot.com",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const auth = getAuth(app)
const analytics = getAnalytics(app);

export default db
