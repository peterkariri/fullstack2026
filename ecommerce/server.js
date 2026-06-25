const express=require('express')
const app=express();

const port=3000 //port 
const path=require('path'). //for [path ]tracing wether static (fs approach)

//middlewares>software that acts as a bridge betwenn apllicaiton 
//to use middleware in express we invoke the .use clause {app.use(//middleware)}

app.use(express.urlencoded({extended:true}))//to encode headers 

app.use(express.json()) //allowa us to use JSON >>define an array here and convert it to Json 
let products=[
    {
        id:1,
        name:"Laptop",
        price:50000,
        category:"Electronics"
    },
    {
        id:2,
        name:"Smartphone",
        price:15000,
        category:"Electronics"
    },
    {
        id:3,
        name:"Hair",
        price:500,
        category:"Cosmetics"
    },
    {
        id:4,
        name:"Keyboard",
        price:700,
        category:"Accessories"
    }
];

//define the routes to my views file (static)
//to be able to use static files we use the path.join(__dirname)

//we use the res.sendFile followed by the
//  path.join with __dirname and the directory, views, and then the name of the file 
    //home page 

    app.get("/",(res,req)=>{
        res.sendFile(path.join(__dirnmane),'views','home.html')
    })

    //login page 
    app.get("/login",(req,res)=>{
        res.sendFile(path.join(__dirnmane,'views','login.html'))
    })
  

    //signup page

    app.get('/signup',(req,res)=>{
           res.sendFile(path.join(__dirname,"views","signup.html"))
    })
  
   // cartpage

     app.get("/cart",(req,res)=>{
        res.sendFile(path.join(__dirnmane,'views','cart.html'))
    })
    //profile
     app.get("/profile",(req,res)=>{
        res.sendFile(path.join(__dirnmane,'views','profile.html'))
    })
  
  
app.listen(`${port}`,()=>{
console.log(`server is listening at ${port}`);

})
