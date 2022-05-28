import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { firestore } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCw8Fvz01khMQd_pZ7re4uuCNwidtrgib4",
    authDomain: "fauna-a0783.firebaseapp.com",
    projectId: "fauna-a0783",
    storageBucket: "fauna-a0783.appspot.com",
    messagingSenderId: "165454124890",
    appId: "1:165454124890:web:c7b6cb380e9bce09be0563"
  };

  const app = initializeApp(firebaseConfig);

  const db = app.firestore();