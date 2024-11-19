// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD5TWHH1vQatqztJaupM8LBwpHqqdFIxA",
  authDomain: "i210-test-ty.firebaseapp.com",
  projectId: "i210-test-ty",
  storageBucket: "i210-test-ty.firebasestorage.app",
  messagingSenderId: "1067320984001",
  appId: "1:1067320984001:web:1a0f4cd8bd6b16972baf40",
  measurementId: "G-LVPT903EG7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
