/* scoping controls where a variable exists and where one can access it [
    ONCE YOU UNDERSTAND SCOPING YOU CREATE UNBREAKABLE CODE STRUCTURE 
]
THERE are a variety of scopes {
    global scope >>a varibale is declared outside and function or block
  for global scoping the varibale can be accessed anywhere in the code 
  one disadvantage is that they stay in memory for longer times and 
  can cause pile up in memory resulting to shared space confusion
} */
let institute='Eldohub'
 function printInstitute(school){
    console.log(institute);
    
 }

 printInstitute()

 //example of confusion 
 let count=0

 function increment(){
    count++
 }

 increment() //increase increment by one 
 increment()
  increment()

 console.log(count);
 
/*  function scoping >>with this scoping we declare variables used inside a specif function 
 and cannot be accessed outside that function  */
 function greetings(){
    let name="Remmy"//function scoping 

    console.log(name);
    
 }
 greetings()
 //console.log(name);//error name is a function scope variable hence no access outside the function 
 
/*  block scoping >>variables defined in block codes such as conditional statements 
 if statements 
 loops 
 functions 
 they can only be access in the block scope itself  */
 if(true){ //block scoping 
    let age=20;
    console.log(age);
    
 }
 else if(false){
    let age=35;
    console.log(age);
    
 }
 else{//default
 let age=40;
    console.log(age);
 }
 //closures
 //hoisting