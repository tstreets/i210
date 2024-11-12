import { app } from "./firebase.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const db = getFirestore(app);

console.log(db);
