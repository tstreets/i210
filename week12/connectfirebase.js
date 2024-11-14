import { app } from "./firebase.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const booksListRef = document.querySelector("#booksList");

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

async function addBook() {
  const bookName = prompt("Book Name:");
  const bookYear = prompt("Book Year:");

  const booksCollection = collection(db, "books");

  await addDoc(booksCollection, { title: bookName, yearPublished: bookYear });

  getBooks();
}

document.querySelector("#addBookButton").onclick = addBook;

getBooks();
