const RENDER_EVENT = 'render-books';
const STORAGE_KEY = 'bookshelf';
const SAVED_DATA = 'save-books';
import * as helper from './helper.js';
import * as handler from './handler.js'; 
let books = [];

// Event Listener
document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('inputTitle').value;
    const author = document.getElementById('inputName').value;
    const year = document.getElementById('inputYear').value;
    const id = helper.generateId();
    const newBooks = helper.generateBooksObject(id, title, author, year, false);
    handler.createNewBooks(newBooks, books);
})