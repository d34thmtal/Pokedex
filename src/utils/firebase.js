// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5rAo2i1KLcIcNJx0kzJDF0uLIYqMhbCo",
  authDomain: "pokedex-max.firebaseapp.com",
  projectId: "pokedex-max",
  storageBucket: "pokedex-max.appspot.com",
  messagingSenderId: "947119419046",
  appId: "1:947119419046:web:1cf4ab090d4f9bdd524e67",
  measurementId: "G-8VE0ENWW86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }