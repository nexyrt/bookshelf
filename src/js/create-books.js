import * as helper from './helper.js';
import * as handler from './handler.js'; 
let books = [];

// Event Listener
document.getElementById('form').addEventListener('submit', (event) => {
    // Preventing the tab from refreshing after clicking the SUBMIT button
    event.preventDefault();

    // Get the Value from Client Side and store it in a Variable
    const title = document.getElementById('inputTitle').value;
    const author = document.getElementById('inputName').value;
    const year = document.getElementById('inputYear').value;
    const id = helper.generateId();
    const newBooks = helper.generateBooksObject(id, title, author, year, false);

    // Creating new books and storing it to Local Storage
    handler.createNewBooks(newBooks, books);
})