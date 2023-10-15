let books = [];
const RENDER_EVENT = 'render-books';
const STORAGE_KEY = 'bookshelf';
const SAVED_DATA = 'save-books';
import * as helper from './helper.js';
import * as handler from './handler.js';

// Event Listener
document.getElementById('read').addEventListener('click', () => {
    document.querySelector('#data-title').innerText = "There's no data to display here!";
    document.getElementById('dropdownDefaultButton').innerHTML = 'Sudah dibaca';
    handler.getReadBooks(books);
    books.length = 0;
})

document.getElementById('unread').addEventListener('click', () => {
    document.querySelector('#data-title').innerText = "There's no data to display here!";
    document.getElementById('dropdownDefaultButton').innerHTML = 'Belum dibaca';
    handler.getUnreadBooks(books);
    books.length = 0;
})

document.getElementById('search').addEventListener('submit', (event) => {
    // Preventing the tab from refreshing after clicking the SUBMIT button
    event.preventDefault();
    
    handler.searchBooks(books);
    books.length = 0;
})