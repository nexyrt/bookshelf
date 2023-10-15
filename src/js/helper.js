const STORAGE_KEY = 'bookshelf';

// Helper Function
export const generateId = () => {
    return +new Date();
}

export const generateBooksObject = (id, title, author, year, isComplete) => {
    return {
        id,
        title,
        author,
        year,
        isComplete,
    }
}

export const findBooksIndex = (id, array) => {
    console.log(id)
    for (const index in array) {
        if (id === array[index].id) {
            return index;
        }
    }
    return -1;
}

export const searchBooksByTitle = (books, keyword) => {
    keyword = keyword.toLowerCase();
    return books.filter(book => book.title.toLowerCase().includes(keyword));
}

export const loadBooks = (books) => {
    const bookshelfData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (bookshelfData) {
        for (const key in bookshelfData) {
            books.push(bookshelfData[key])
        }
    } else {
        const containerTitle = document.querySelector('#data-title');
        containerTitle.innerText = "There's no data to Display!";
    }
}

export const displayData = (books) => {
    const cardsContainer = document.querySelector('#cards-container');
    cardsContainer.innerHTML = '';

    for (const key in books) {
        const booksContainer = document.createElement('div');
        booksContainer.classList.add("relative", "flex", "flex-col", "gap-y-2", "min-w-[300px]", "max-w-[300px]", "bg-slate-100", "p-3", "rounded-xl", "shadow-xl");

        // Read Status
        const statusContainer = document.createElement('div');
        const statusText = document.createElement('p');
        const bookStatus = document.createElement('p');

        if (books[key].isComplete) {
            bookStatus.innerText = ' Completed'
            bookStatus.classList.add('rounded-lg', 'bg-green-300', 'text-white', 'p-1', 'text-xs', 'w-fit')
        } else {
            bookStatus.innerText = ' Incomplete'
            bookStatus.classList.add('rounded-lg', 'bg-red-400', 'text-white', 'p-1', 'text-xs', 'w-fit')
        }
        statusText.innerText = 'Status :'
        statusContainer.classList.add('flex', 'gap-x-1');
        statusContainer.appendChild(statusText);
        statusContainer.appendChild(bookStatus);

        // Create Books Desc
        const booksTitle = document.createElement('h3');
        const booksAuthor = document.createElement('p');
        const booksYear = document.createElement('p');

        booksTitle.innerText = books[key].title;
        booksAuthor.innerText = `Author : ${books[key].author}`;
        booksYear.innerText = `Year's Released : ${books[key].year}`;

        booksTitle.classList.add('font-semibold', 'text-2xl', 'text-blue-500');

        // Create Switch Status Icon
        const switchButton = document.createElement('img');
        switchButton.classList.add('max-w-6', 'max-h-6')
        // End of Switch Status Icon

        // Combine all the Elements into Cards Container
        booksContainer.appendChild(booksTitle);
        booksContainer.appendChild(booksAuthor);
        booksContainer.appendChild(booksYear);
        booksContainer.appendChild(statusContainer);
        booksContainer.appendChild(switchButton);
        cardsContainer.appendChild(booksContainer);
    }
}