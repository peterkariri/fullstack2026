const express = require('express');
const app = express();

const port = 3000;

// Path module helps locate files and folders
const path = require('path');

// MIDDLEWARES
// Middleware acts as a bridge between the request and response

// Handles form data
app.use(express.urlencoded({ extended: true }));

// Handles JSON data
app.use(express.json());

// Sample product data
let products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        category: "Electronics"
    },
    {
        id: 2,
        name: "Smartphone",
        price: 15000,
        category: "Electronics"
    },
    {
        id: 3,
        name: "Headphones",
        price: 3000,
        category: "Accessories"
    },
    {
        id: 4,
        name: "Keyboard",
        price: 2500,
        category: "Accessories"
    }
];

// HOME PAGE
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// LOGIN PAGE
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
   
});

// SIGNUP PAGE
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// CART PAGE
app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cart.html'));
});

// PROFILE PAGE
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

// GET ALL PRODUCTS
app.get('/products', (req, res) => {
    res.json(products);
});



// START SERVER
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});