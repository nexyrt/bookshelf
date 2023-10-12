// Helper Function
export const generateId = () => {
    return +new Date();
}

export const generateBooksObject = (id, title, author, year, readStatus) => {
    return {
        id,
        title,
        author,
        year,
        readStatus,
    }
}

export const findBooksIndex = (id, array) => {
    for (const index of array) {
        if (id === array[index]) {
            return index;
        }
    }
    return -1;
}

export const makeCards = () => {

}