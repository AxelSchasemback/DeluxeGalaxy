import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB0RTRYzXRyyZgGut5jifrnwvM9-NF12Sw",
  authDomain: "deluxegalaxyios.firebaseapp.com",
  projectId: "deluxegalaxyios",
  storageBucket: "deluxegalaxyios.appspot.com",
  messagingSenderId: "747712358073",
  appId: "1:747712358073:web:94f36c5e348264b4e11d68",
  measurementId: "G-NCD9TJTBDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const auth = getAuth(app)
const analytics = getAnalytics(app);

export default db