/* a datatype is a classification or type of how we want to represnt data in our code.
 it is a way to specify the type of data that a variable can hold.
 we have two categories of data types in javascript
 1. primitive data types
 2. non-primitive data types

 primitive data types>>these are the basic data types that are not objects and do not have methods and cannot change .
 examples include(strings ,numbers,boolean,null,undefined)

 non-primitive data types>>these are the data types that are objects and have methods and can change. */

 /* strings>>these are a set of characters used to represent text and they are enclosed in {
    single quotes(' '), double quotes(" "), or backticks(` `) for template literals/.
 } */
 let sentenceOne='this is a string';
    let sentenceTwo="this is also a second string";
    let sentenceThree=`this is also a this string`;

  /*   combine strings(string concatenation)>>we can combine strings using the + operator 
    or by using template literals with backticks and ${} to insert variables or expressions into the string.
    
    to seperate strings in  an addditon contenxt we use the doube quotes as the delimiter and plus signs on both sides */ 


    let firstName="Aila";
    let lastName="Mardhia";
    let paragraph="I am a fulllstack developer and i am learning javascript to build web applications and i am enjoying it so much";
    //combining stirngs using + operator
    let fullName=firstName + " " + lastName

    console.log(fullName);

    //combining strings using template literals
    //we parse the values using the dollar sign and curly brackets object format and we use the backticks to enclose the string
    let output=`My name is ${firstName} ${lastName} and ${paragraph}`;
    console.log(output);

    //single and double quptes are only used for single line strings but if we want 
    // to write a string that spans multiple lines we can use
    //  template literals with backticks and it will preserve the line breaks and spacing in the string.
    
/* number>>they ae used to represent integers(ANY NUMBER WITHOUT A DECIMAL POINT)
 and floating point(NUMBERS WITH A DECIMAL POINT) number 
 including special numbers such as infinity and NaN(not a number)
 
 we use the typeof operator to check the type of a variable or a data type */ 
 let age=34; /* INTEGER */
   let price=19.99; /* FLOATING POINT */
   let infinity=Infinity; //represents a value that is greater than any other number
   let notANumber=NaN; //represents a value that is not a number
   console.log(typeof(infinity));
   console.log(typeof(notANumber));
   console.log(typeof(age));
   console.log(typeof(price));
   
   NaN===NaN
   
   let numberOne=10;
   let numberTwo="10";
   console.log(numberOne==numberTwo); //true >>coersion happens here and the string "10"
   //  is converted to the number 10 before the comparison is made
   console.log(numberOne===numberTwo);//false>>strict equality operator checks for both 
   // value and type and since numberOne is a number and numberTwo is a string, 
   // they are not strictly equal.
   
   console.log("5"/2);
   
  /*  bolean>>used to check wether a condition is true or false
   you are either 1 or 0, true or false, on or off, yes or no
   they are often used in conditional statements and loops to control the flow of the program.
   we use the exclamation mark to apply a negation to a statement >>negate operator 
  */
 let isLoggedIn=true;
 let hasPermission=false;//restricting the user from the platform
 console.log(!0);
  console.log(!!0);//the first exclamation mark negates the value of 0, 
  // which is falsy, so it becomes true. The second exclamation mark negates the value of true,
  //  which is truthy, so it becomes false. Therefore, !!0 evaluates to false.)

 
 console.log(typeof(isLoggedIn));
 
/*  undefined>>this is used to refer to something that has been called and was not passed in a value

a variable that has been declared but not assigned a value */
let firstname;
console.log(firstname);

/* null>>represents intentional absence of a value 

you want it to be a placeholder for a value that will be assigned
 later or to indicate that a variable should not have a value.
*/
let y=null;
console.log(y);
y="peter"
console.log(y);

/* non primitive data types 
this are the most common and important datatypes 
in javascript and they include objects, arrays, functions, regex,and dates.
*/
/* objects this are a collection of key value pairs that are used to store data 
we defie objects using a few methods the first and most commmon is 
object literal syntax where we use the variable name the assignment operator and the curly
 brackets to enclose the data sets where 
the key and value are seperated with a colon just like in css property
 and value.we seperate the key value pair with comms
*/
const person={
   name:"Remmy Opondo",
   age:34,
   isStudent:true,
   hobbies:["coding","reading","traveling"],
   address:{
      city:"Nairobi",
      country:"Kenya",
      postalCode:3100
   }
}
/* to access elements in an object we use the dot Notification,bracket notation */ 
/* the dot Notification */
console.log(person.name);
/* the bracket notation >>you will have to have some components in quotes based on their data type*/
console.log(person["name"]);

let properties=`My name is ${person.name} and i am ${person.age}
 years old and my hobby is ${person.hobbies[0]}
 and i live in ${person.address.city}, in ${person.address.country} 
 and my postal code is ${person.address.postalCode}`;

 console.log(properties);
 