const express=require('express')//calling the express module
let app=express();
let port=3002

let person={
    name:'admin'
}
//now that we have express referred to thte app we use the app now 

app.listen(`${port}`,()=>{
    console.log(`the app is listening wesss ${port}`);
    
})

app.get('/',(req,res)=>{
    res.send(`welcome ${person.name}`)
})