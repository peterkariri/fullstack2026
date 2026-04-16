/* they allow use to decisions in code 
if statements 
switch statements
ternary operator
break and continue statements
if statements >>this are a variety of statements that allow 
us to execute a block of code based on a condition{
    if statement>>this only retuns the truthy value of the condition and 
    executes the block of code if the condition is true

    if else statement>>this allows us to execute a block of code if the condition is true
     and another block of code if the condition is false

     nested if else statement>>this allows us to check multiple 
     conditions by nesting if else statements within each other using the else if statement and 
     later having a default else statement to catch any conditions that 
     do not match the previous conditions

} */
let number=10;
if(number==10){
    console.log("The number is 10");
}
let age=19;
if(age>=12 && age<=18){
    console.log("this is a teenager"); 
}
else{
    console.log("this is not a teenager");
}


//marking score
let grade=122;
if(grade>=90 && grade<=100){
    console.log("A");
}
else if(grade>=80 && grade<89){
    console.log("B");
}
else if(grade>=70 && grade<79){
    console.log("C");
}
else if(grade>=60 && grade<69){
    console.log("D");
}
else{ //the default case if all the above conditions are false
    console.log("INVALID GRADE SEE ACADEMICS OFFICE");
}

/* SWITCH STATEMENT >>this is a control statement that allows 
us to execute a block of code based on the value of an expression
iot defines cases or instances  of particular occurences or values */
//checking which day of the week it is 
//we have the default keyword that specifies the value 
// that will be read if any of the cases is not met 

//we use the break statement to exit the switch statement once the conditionis met 

let day=11;
switch(day){
    case 1:
        console.log("today is monday");
        break;
    case 2:
        console.log("today is tuesday");
        break;
    case 3:
        console.log("today is wednesday");
        break;
    case 4:
        console.log("today is thursday");
        break;
    case 5:
        console.log("today is friday");
        break;
    case 6:
        console.log("today is saturday");
        break;
    case 7:
        console.log("today is sunday");
        break;
    default:
        console.log("invalid day of the week");    
}