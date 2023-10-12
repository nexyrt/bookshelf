let books = [];
const RENDER_EVENT = 'render-books';
const STORAGE_KEY = 'bookshelf';
const SAVED_DATA = 'save-books';
import * as helper from './helper.js';
import * as handler from './handler.js';

// Event Listener
document.getElementById('read').addEventListener('click', () => {
    document.getElementById('dropdownDefaultButton').innerHTML = 'Sudah dibaca';
    handler.getReadBooks(books);
})

document.getElementById('unread').addEventListener('click', () => {
    document.getElementById('dropdownDefaultButton').innerHTML = 'Belum dibaca';
    handler.getUnreadBooks(books);
})
