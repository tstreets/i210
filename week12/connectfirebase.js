import { app } from "./firebase.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const booksListRef = document.getElementById("booksList");

const db = getFirestore(app);

async function getBooks() {
  const booksCollection = collection(db, "books");
  const booksDocs = await getDocs(booksCollection);

  booksListRef.innerHTML = "";
  for (let i = 0; i < booksDocs.docs.length; i++) {
    const book = booksDocs.docs[i];
    const bookData = book.data();

    booksListRef.innerHTML += `<li>${bookData.title} (${bookData.yearPublished})</li>`;
  }
}

getBooks();
