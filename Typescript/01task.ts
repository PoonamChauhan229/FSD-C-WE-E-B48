// 1. Library Book Management System

// Create a system to:

//array methods
// Add books   >> push()
// Borrow/return books >>find() >>list of books >> 
// Find available books >>filter()
// Get total books count >> calculate the length

// Use:

// Interface
// Arrays  >> arrays of objects
// filter/find/map

interface Book {
    id: number;
    title: string;
    author: string;
    isBorrowed: boolean;
}

const books: Book[] = [
    {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        isBorrowed: false,
    },
    {
        id: 2,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        isBorrowed: true,
    },
    {
        id: 3,
        title: "The Alchemist",
        author: "Paulo Coelho",
        isBorrowed: false,
    },
]

// Add some thing at the end >>push
// parameter :type object  + return type of function 
function addBook(x:Book):void{
books.push(x)
console.log("Books added successfully....")
}
addBook({
  id: 4,
  title: "Clean Code",
  author: "Robert C. Martin",
  isBorrowed: false,
})

console.log(books)


// Q1:
// Movie Rating System

// Manage movies with:

// Movie name
// Rating
// Genre
// Release year

// Implement:

// Top-rated movie
// Filter by genre
// Average rating
// Sort by rating


// Q2:
// Order Management System

// Features:

// Place order
// Cancel order
// Get delivered orders
// Calculate total revenue
// Search orders by customer