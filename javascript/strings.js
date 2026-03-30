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

//methods for extracting parts of a sting
/* we have various methods for extracting parts of a string namely {
    slice()>>this method extracts a section of a string and returns it as a new string
     without modifying the original string
     it has two indexes (one denotes where the string truncation will 
     begin and the other where it will end )in additon it
      has a negative index >>it can start counting from the right side 

    substring()>>this method is similar to slice but it does not accept 
    negative indices and if the start index is greater than the end index
     it will swap them
   
} */
 let slicedString=sentence.slice(0,19);
     console.log(slicedString);

     console.log(sentence);
     
     //we use this when tryin to filter names and also getting file extensions

     let report="AnnualReport2023.pdf";
     let newFileExtension=report.slice(-3);
     console.log(newFileExtension);
//if we use a substring with a negative index it will not work and it will return an empty string
        let subString=sentence.substring(-10,5);
        console.log(subString);


//cleaning up the strings >>we use th trim()method to clean up a stirn g empty whitespaces 
let email="      remmyopond0254@gmail.com      "
console.log(email);
let cleanEmail=email.trim();
console.log(cleanEmail);
/* USAGES{
    NO WHITE SPACES
    COPY PASTE ISSUES ARE SOLVED(PASSWORDS,EMAILS AND OTPS )
    FORM INPUTS ARE CLEANED UP 
}
WE CAN FURTHER HAV trimStart() AND trimEnd() TO REMOVE WHITESPACE FROM THE 
START OR END OF A STRING RESPECTIVELY
      */
