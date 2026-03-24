/* variables are containers for storing data values.
 In JavaScript, you can declare a variable using three key words{
    var>>used to declare variables that can be reassigned(name)can be changed
    let>>used to declare variables that can be reassigned(name)can be changed
    const>>used to declare unchanging variables(age)fixed values
 }

 naming variables>>to name variables you have to come up with a word and it should be something
  reolated to the value it holds. for example if you want to store a name you can name the variable 
  name or if you want to store an age you can name the variable age.
 to declare this we use this syntax 

 var {variable name} = {value};
 let {variable name} = {value};
 const {variable name} = {value}; */

 var firstName="Aila";

 let lastName="Mardhia";

 const age=25;
/*  if i want to see the output of this vaious components i use console.log() function to output the value in the console
 this is only applicable in development stage and not in production stage because it can be used to debug the 
 code and see the output of the variables and functions.
 to view this we run 
 node {nameofthefile.js}
  in the terminal and we can see the output of the variables in the console.
 */
 console.log(firstName);
    console.log(lastName);
    console.log(age);


/*     to reassign you just declare the name of the variable and assign a new value to it for example
 */    
 
firstName=" Mardhia";
lastName="Aila";


                console.log(firstName);
                console.log(lastName);
                
/*  as you can see we can reassign the value of the variables declared with var and let but we cannot
 reassign the value of the variable declared with 
const because it is a constant variable and it cannot be changed once it is assigned a value. */
/* the two types of outputs shows you that javascript is interpreted language and it executes the 
code line by line and it does not need to be compiled before it is executed.and if you make an error 
at any line it will stop executing until you fix that error */

