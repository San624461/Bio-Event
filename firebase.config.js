
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb2HvBKgkPZwy5et0cqZkuwj5Gj-tnuW0",
  authDomain: "bio-events.firebaseapp.com",
  projectId: "bio-events",
  storageBucket: "bio-events.appspot.com",
  messagingSenderId: "391818491451",
  appId: "1:391818491451:web:e362aed5d08bb8bc2c0e1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
