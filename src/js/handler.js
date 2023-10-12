const STORAGE_KEY = 'bookshelf';
import * as helper from './helper.js';

// Event Handler
export const createNewBooks = (newBooks, books) => {
    if (JSON.parse(localStorage.getItem(STORAGE_KEY)) == null) {
        books.push(newBooks);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
    } else {
        books = JSON.parse(localStorage.getItem(STORAGE_KEY));
        books.push(newBooks);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
    }
}

export const getReadBooks = (books) => {
    const cardsContainer = document.querySelector('#cards-container');
    const containerTitle = document.querySelector('#data-title');

    if (JSON.parse(localStorage.getItem(STORAGE_KEY)) == null) {
        containerTitle.innerText = "There's no data to display here!";
        return
    }

    books = JSON.parse(localStorage.getItem(STORAGE_KEY));
    containerTitle.innerText = `There are ${books.length} books you've read!`;
    cardsContainer.innerHTML = '';
    for (const key in books) {
        if (books[key].readStatus === false) {
            // Create Container
            const booksContainer = document.createElement('div');
            // booksContainer.setAttribute('id', boo)
            booksContainer.classList.add("flex", "flex-col", "gap-y-2", "min-w-[300px]", "bg-slate-100", "p-3", "rounded-xl", "shadow-xl");

            // Create Books Desc
            const booksTitle = document.createElement('h3');
            const booksAuthor = document.createElement('p');
            const booksYear = document.createElement('p');

            booksTitle.innerText = 'Harry Potter';
            booksAuthor.innerText = 'Rizky Hamdani';
            booksYear.innerText = '2022';

            booksTitle.classList.add('font-semibold', 'text-2xl', 'text-blue-500');

            // Create Status Toggle
            const toggleLabel = document.createElement('label');
            const toggleInput = document.createElement('input');
            const toggleDiv = document.createElement('div');

            toggleLabel.classList.add('relative', 'mt-2', 'inline-flex', 'items-center', 'cursor-pointer');

            toggleInput.classList.add('sr-only', 'peer')
            toggleInput.setAttribute('id', 'toggle-status')
            toggleInput.setAttribute('type', 'checkbox')

            toggleDiv.classList.add("w-11", "h-6", "bg-gray-200", "peer-focus:outline-none", "peer-focus:ring-4", "peer-focus:ring-blue-300", "dark:peer-focus:ring-blue-800", "rounded-full", "peer", "dark:bg-gray-700", "peer-checked:after:translate-x-full", "peer-checked:after:border-white", "after:content-['']", "after:absolute", "after:top-[2px]", "after:left-[2px]", "after:bg-white", "after:border-gray-300", "after:border", "after:rounded-full", "after:h-5", "after:w-5", "after:transition-all", "dark:border-gray-600", "peer-checked:bg-blue-600");

            toggleLabel.appendChild(toggleInput)
            toggleLabel.appendChild(toggleDiv)
            // End of Status Toggle

            // Combine all the Elements into Cards Container
            booksContainer.appendChild(booksTitle);
            booksContainer.appendChild(booksAuthor);
            booksContainer.appendChild(booksYear);
            booksContainer.appendChild(toggleLabel);
            cardsContainer.appendChild(booksContainer);
        } else {
            containerTitle.innerText = "Semua buku sudah dibaca!";
        }
    }
}

export const getUnreadBooks = (books) => {
    const cardsContainer = document.querySelector('#cards-container');
    const containerTitle = document.querySelector('#data-title');

    if (JSON.parse(localStorage.getItem(STORAGE_KEY)) == null) {
        containerTitle.innerText = "There's no data to display here!";
        return
    }

    books = JSON.parse(localStorage.getItem(STORAGE_KEY));
    containerTitle.innerText = `There are ${books.length} books you haven't read!`;
    cardsContainer.innerHTML = '';
    for (const key in books) {
        if (books[key].readStatus === true) {
            // Create Container
            const booksContainer = document.createElement('div');
            // booksContainer.setAttribute('id', boo)
            booksContainer.classList.add("flex", "flex-col", "gap-y-2", "min-w-[300px]", "bg-slate-100", "p-3", "rounded-xl", "shadow-xl");

            // Create Books Desc
            const booksTitle = document.createElement('h3');
            const booksAuthor = document.createElement('p');
            const booksYear = document.createElement('p');

            booksTitle.innerText = 'Harry Potter';
            booksAuthor.innerText = 'Rizky Hamdani';
            booksYear.innerText = '2022';

            booksTitle.classList.add('font-semibold', 'text-2xl', 'text-blue-500');

            // Create Status Toggle
            const toggleLabel = document.createElement('label');
            const toggleInput = document.createElement('input');
            const toggleDiv = document.createElement('div');

            toggleLabel.classList.add('relative', 'mt-2', 'inline-flex', 'items-center', 'cursor-pointer');

            toggleInput.classList.add('sr-only', 'peer')
            toggleInput.setAttribute('id', 'toggle-status')
            toggleInput.setAttribute('type', 'checkbox')

            toggleDiv.classList.add("w-11", "h-6", "bg-gray-200", "peer-focus:outline-none", "peer-focus:ring-4", "peer-focus:ring-blue-300", "dark:peer-focus:ring-blue-800", "rounded-full", "peer", "dark:bg-gray-700", "peer-checked:after:translate-x-full", "peer-checked:after:border-white", "after:content-['']", "after:absolute", "after:top-[2px]", "after:left-[2px]", "after:bg-white", "after:border-gray-300", "after:border", "after:rounded-full", "after:h-5", "after:w-5", "after:transition-all", "dark:border-gray-600", "peer-checked:bg-blue-600");

            toggleLabel.appendChild(toggleInput)
            toggleLabel.appendChild(toggleDiv)
            // End of Status Toggle

            // Combine all the Elements into Cards Container
            booksContainer.appendChild(booksTitle);
            booksContainer.appendChild(booksAuthor);
            booksContainer.appendChild(booksYear);
            booksContainer.appendChild(toggleLabel);
            cardsContainer.appendChild(booksContainer);
        } else {
            containerTitle.innerText = "Belum ada buku yang selesai dibaca!";
        }
    }
}