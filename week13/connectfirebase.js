import { app } from "./firebase.js";
import {
  getFirestore,
  getDocs,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const db = getFirestore();
