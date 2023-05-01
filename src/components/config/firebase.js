// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE2f2kWMnQaNstZCjeVu6kJGSnmagG-dI",
  authDomain: "yummy-foodies-8d25c.firebaseapp.com",
  projectId: "yummy-foodies-8d25c",
  storageBucket: "yummy-foodies-8d25c.appspot.com",
  messagingSenderId: "449697430503",
  appId: "1:449697430503:web:bef91a043f8f3ba63b5b42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;