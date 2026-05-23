"use strict";
// 1. Library Book Management System
const books = [
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
];
// Add some thing at the end >>push
// parameter :type object  + return type of function 
function addBook(x) {
    books.push(x);
    console.log("Books added successfully....");
}
addBook({
    id: 4,
    title: "Clean Code",
    author: "Robert C. Martin",
    isBorrowed: false,
});
console.log(books);
