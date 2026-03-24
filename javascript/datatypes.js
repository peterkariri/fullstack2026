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
    