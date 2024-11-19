import { app } from "./firebase.js";
import {
  getFirestore,
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const db = getFirestore(app);

const sectionRef = document.querySelector("section");

async function getBooks() {
  const booksCollection = collection(db, "books");
  const booksDocs = await getDocs(booksCollection);

  sectionRef.innerHTML = "";
  for (let i = 0; i < booksDocs.docs.length; i++) {
    const book = booksDocs.docs[i];
    const bookData = book.data();

    sectionRef.innerHTML += `
      <div>
        <h4>${bookData.title}</h4>
        <p>${bookData.yearPublished}</p>

        <div>
          <button class="delete-button" data-book-id="${book.id}">Delete</button>
          <button class="update-button" data-book-id="${book.id}" >Update Year</button>
        </div>
      </div>
    `;
  }

  const deleteButtons = document.querySelectorAll(".delete-button");

  for (const deleteButton of deleteButtons) {
    deleteButton.onclick = deleteBook;
  }

  const updateButtons = document.querySelectorAll(".update-button");

  for (const updateButton of updateButtons) {
    updateButton.onclick = updateBookYear;
  }
}

async function deleteBook(e) {
  const bookId = e.currentTarget.dataset.bookId;
  const booksCollection = collection(db, "books");
  const bookDoc = doc(booksCollection, bookId);
  await deleteDoc(bookDoc);

  getBooks();
}

async function updateBookYear(e) {
  const bookId = e.currentTarget.dataset.bookId;
  const booksCollection = collection(db, "books");
  const bookDoc = doc(booksCollection, bookId);
  const newBookYear = prompt("Gimme your book year!!!");

  await updateDoc(bookDoc, { yearPublished: newBookYear });

  getBooks();
}

getBooks();
