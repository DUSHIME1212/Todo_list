 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 
const firebaseConfig = {
  apiKey: "AIzaSyBq_wR5SaOCZAKdoPJLb2Gjw4x2O6w2K3E",
  authDomain: "todolist-clone-7fdba.firebaseapp.com",
  projectId: "todolist-clone-7fdba",
  storageBucket: "todolist-clone-7fdba.appspot.com",
  messagingSenderId: "38191697693",
  appId: "1:38191697693:web:59eacd903acf2002c9dbf4",
  measurementId: "G-7GMJQWLKTP"
};
 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);