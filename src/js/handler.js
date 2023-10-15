const STORAGE_KEY = 'bookshelf';
import * as helper from './helper.js';

// Event Handler
export const createNewBooks = (newBooks, books) => {
    if (JSON.parse(localStorage.getItem(STORAGE_KEY))) books = JSON.parse(localStorage.getItem(STORAGE_KEY));

    books.push(newBooks);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
    books.length = 0;
}

export const getReadBooks = (books) => {
    const dataTitle = document.getElementById('data-title');

    helper.loadBooks(books);
    books = books.filter(book => book.isComplete === true)

    if(books.length == 0) {
        return
    }
    dataTitle.innerText = `${books.length} book you've read!`
    helper.displayData(books)
}

export const getUnreadBooks = (books) => {
    const dataTitle = document.getElementById('data-title');

    helper.loadBooks(books);
    books = books.filter(book => book.isComplete === false)

    if(books.length == 0) {
        return
    }
    dataTitle.innerText = `${books.length} book you haven't read!`
    helper.displayData(books)
}

export const searchBooks = (books) => {
    helper.loadBooks(books); 
    const searchTerm = document.getElementById('default-search');
    const results = helper.searchBooksByTitle(books, searchTerm.value);

    document.getElementById('data-title').innerText = `Books containing "${searchTerm.value}" in their title:`;
    helper.displayData(results)
    searchTerm.value = "";
}