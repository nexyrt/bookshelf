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
        booksContainer.classList.add("relative", "flex", "flex-col", "gap-y-2", "min-w-[300px]", "max-w-[300px]", "h-fit", "bg-slate-100", "p-3", "rounded-xl", "shadow-xl");

        // Read Status and Switch,Delete Buttons
        const statusContainer = document.createElement('div');
        const statusText = document.createElement('p');
        const bookStatus = document.createElement('p');


        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('flex', 'gap-x-2', 'absolute', 'bottom-3', 'right-5')
        const deleteButton = document.createElement('button');

        if (books[key].isComplete) {
            bookStatus.innerText = ' Completed'
            bookStatus.classList.add('rounded-lg', 'bg-green-300', 'text-white', 'p-1', 'text-xs', 'w-fit')
            const undoButton = document.createElement('button');
            undoButton.classList.add('w-6', 'h-6', 'bg-[url(../../assets/refresh.svg)]', 'hover:rotate-90', 'transform', 'transition-all', 'duration-300')
            undoButton.addEventListener('click', () => {
                let storageData = [];
                loadBooks(storageData);
                const booksTarget = findBooksIndex(books[key].id, storageData);
                if (booksTarget === -1) return;
                storageData[booksTarget].isComplete = false;
                localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
                window.location.href = '../html/index.html'
            })
            buttonsContainer.appendChild(undoButton);
        } else {
            bookStatus.innerText = ' Incomplete'
            bookStatus.classList.add('rounded-lg', 'bg-red-400', 'text-white', 'p-1', 'text-xs', 'w-fit')
            const switchButton = document.createElement('button');
            switchButton.classList.add('w-6', 'h-6', 'bg-[url(../../assets/done-outline.svg)]', 'hover:bg-[url(../../assets/done-solid.svg)]', 'transform', 'transition-all', 'duration-300')
            switchButton.addEventListener('click', () => {
                let storageData = [];
                loadBooks(storageData);
                const booksTarget = findBooksIndex(books[key].id, storageData);
                if (booksTarget === -1) return;
                storageData[booksTarget].isComplete = true;
                localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
                window.location.href = '../html/index.html'
            })
            buttonsContainer.appendChild(switchButton);
        }
        deleteButton.classList.add('w-6', 'h-6', 'bg-[url(../../assets/trash-outline.svg)]', 'hover:bg-[url(../../assets/trash-solid.svg)]', 'transform', 'transition-all', 'duration-300')
        deleteButton.addEventListener('click', () => {
            let storageData = [];
            loadBooks(storageData);
            const booksTarget = findBooksIndex(books[key].id, storageData);
            if (booksTarget === -1) return;
            storageData.splice(booksTarget, 1);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
            window.location.href = '../html/index.html'
        })

        statusText.innerText = 'Status :'
        statusContainer.classList.add('flex', 'gap-x-1');
        statusContainer.appendChild(statusText);
        statusContainer.appendChild(bookStatus);
        buttonsContainer.appendChild(deleteButton);

        // Create Books Desc
        const booksTitle = document.createElement('h3');
        const booksAuthor = document.createElement('p');
        const booksYear = document.createElement('p');

        booksTitle.innerText = books[key].title;
        booksAuthor.innerText = `Author : ${books[key].author}`;
        booksYear.innerText = `Year's Released : ${books[key].year}`;

        booksTitle.classList.add('font-semibold', 'text-2xl', 'text-blue-500');

        // Combine all the Elements into Cards Container
        booksContainer.appendChild(booksTitle);
        booksContainer.appendChild(booksAuthor);
        booksContainer.appendChild(booksYear);
        booksContainer.appendChild(statusContainer);
        booksContainer.appendChild(buttonsContainer);
        cardsContainer.appendChild(booksContainer);
    }
}