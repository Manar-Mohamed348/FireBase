// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5ECCipCI8soxODBT2AmenlCdZakF67Uo",
  authDomain: "login-cdeec.firebaseapp.com",
  projectId: "login-cdeec",
  storageBucket: "login-cdeec.firebasestorage.app",
  messagingSenderId: "339461633738",
  appId: "1:339461633738:web:83c5e663c9179519f4a633",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//input fields
const signUpButton = document.querySelector(".btn");

signUpButton.addEventListener("click", function (event) {
  event.preventDefault();
  const signUpEmail = document.getElementById("signup-email").value;
  const signUpPassword = document.getElementById("signup-password").value;
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
localStorage.setItem("userEmail", user.email);
window.location.href = "main.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
});
