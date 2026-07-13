const express = require('express');
const app = express();
const mysql=require('mysql2')
const port = 3000;

// Path module helps locate files and folders
const path = require('path');

app.set("view engine" ,"ejs")
// MIDDLEWARES
// Middleware acts as a bridge between the request and response

//once mysql2 has been importes we create.  connection pool to our local database
//we use the createpool() or createConnection()
/* the connction has properties in it to link to database this includ {
    host:'localhost'
    password:''
    user:'root'
    database :'name' 

} */
let pool=mysql.createPool(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'ECOMMMERCE'
    }
)
/* to test this connection we use the getConnection methods which takes in two parameters {
    an error and a successful connection 
    we do this by chaining the pool to getConnecton method
} */

    pool.getConnection((err,connection)=>{
        if(err){
              console.log("database unsuccefful");
              
        }
        else{
            console.log("database connected successfully");

            connection.release()
            
        }
        
    })


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
//static routes 

// HOME PAGE
/* app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
}); */

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
/* app.get('/products', (req, res) => {
    res.json(products);
});
 */
const school="Eldohub"
let course="Graphics Design"

//dynamic routes >>this will render dynamic content >>templating language 
app.get("/",(req,res)=>{
    res.render("home",{
        name:'Remi',
        age:39,
        course:"Fullstack Software Engineering"
        
    })
})

app.get("/products", (req, res) => {

    res.render("products", {
        products
    });

});

// START SERVER
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});