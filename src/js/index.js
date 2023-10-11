const books = [];
const RENDER_EVENT = 'render-books';
const STORAGE_KEY = 'bookshelf';
const SAVED_DATA = 'save-books';

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('inputTitle').value;
    const author = document.getElementById('inputName').value;
    const year = document.getElementById('inputYear').value;
    const booksData = generateBooksObject(title, author, year);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(booksData));
})

const generateBooksObject = (title, author, year) => {
    return {
        title,
        author,
        year
    }
}