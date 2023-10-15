// Sample array of books
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
  ];
  
  // Function to search for books by a keyword in their title
  function searchBooksByTitle(books, keyword) {
    keyword = keyword.toLowerCase(); // Convert the keyword to lowercase for case-insensitive search
  
    return books.filter(book => book.title.toLowerCase().includes(keyword));
  }
  
  // Example: Search for books containing the word "pride" in their title
  const searchTerm = "kill";
  const results = searchBooksByTitle(books, searchTerm);
  
  // Display the search results
  if (results.length === 0) {
    console.log("No matching books found.");
  } else {
    console.log(`Books containing "${searchTerm}" in their title:`);
    results.forEach(book => {
      console.log(`- ${book.title} by ${book.author}`);
    });
  }