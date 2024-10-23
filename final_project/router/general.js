const express = require('express');
let books = require("./booksdb.js");
const public_users = express.Router();

// Register New User
public_users.post("/register", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" });
    }

    if (users.find(user => user.username === username)) {
        return res.status(400).json({ message: "Username already exists" });
    }

    users.push({ username, password });
    return res.status(201).json({ message: "User registered successfully" });
});

// Get the book list available in the shop
public_users.get('/', async function (req, res) {
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate async delay
    return res.status(200).json(books); // Return book list
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', async function (req, res) {
    const isbn = req.params.isbn;
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate async delay
    const book = books[isbn];

    if (book) {
        return res.status(200).json(book);
    } else {
        return res.status(404).json({ message: "Book not found" });
    }
});

// Get book details based on author
public_users.get('/author/:author', async function (req, res) {
    const author = req.params.author;
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate async delay
    const authorBooks = Object.values(books).filter(book => book.author === author);

    if (authorBooks.length > 0) {
        return res.status(200).json(authorBooks);
    } else {
        return res.status(404).json({ message: "No books found for this author" });
    }
});

// Get all books based on title
public_users.get('/title/:title', async function (req, res) {
    const title = req.params.title;
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate async delay
    const titleBooks = Object.values(books).filter(book => book.title === title);

    if (titleBooks.length > 0) {
        return res.status(200).json(titleBooks);
    } else {
        return res.status(404).json({ message: "No books found with this title" });
    }
});

// Get book reviews
public_users.get('/review/:isbn', async function (req, res) {
    const isbn = req.params.isbn;
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate async delay
    const book = books[isbn];

    if (book) {
        return res.status(200).json(book.reviews);
    } else {
        return res.status(404).json({ message: "Book not found" });
    }
});

module.exports.general = public_users;
