/* checking the length of a string 
we use the length property chained to the string name
methods mostly are chained and perform a specific task on the data type they are used on
to do a chaining we use the dot operator */ 
let fullName="Remmy Opondo";
//check the lenght of this i am going to use the lenght property
//even empty spaces(whitespace) are counted as characters in a string
console.log(fullName.length);

//Remmy Opondo 

//toUpperCase>>we use this to transform a string to uppercase letters
//to call a method we use the parenthesis after the method name 
let upperCaseName=fullName.toUpperCase();
console.log(upperCaseName);
//REMMY OPONDO

//toLowerCase>>we use this to transform a string to lowercase letters
let lowerCaseName=upperCaseName.toLowerCase();
console.log(lowerCaseName);

//remmy opondo

//point of application>>we use this in forms to ensure user input is correclty stores in 
//the database and to ensure that the data is uniform and consistent in the database

//searching components

/* to search in a string we have various methods namely {
    indexOf()>>gives the index of the first instance/ocurence of the specified value in a string
    includes()>>searches the string for the value that has been included and return a boolean value(true/fasle)
    startsWith()checks if a string/sentence starts with a specified value and returns a boolean value(true/false)
    endsWith()checks if a string/sentence ends with a specified value and returns a boolean value(true/false)
    charAt()
} */

let sentence=`The quick brown fox jumps over the lazy dog with fox embedded colors`;

console.log(sentence.indexOf("f"));
console.log(sentence.includes("c"));
console.log(sentence.startsWith("they"));
console.log(sentence.endsWith("Colors"));

