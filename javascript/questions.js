//function that greets the user 
function greetUser(name){
    console.log(`Hello ${name} welcome to Javascript`);
    
}
greetUser("Aila")

//print number 1-5//refers to a void function it does not have an argument and it does not return a value
let printNumbers=function(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
printNumbers();
//function that check for even numbers >>this are numbers that are divisble by 2
//define the function 
//give the logic that if a number has no reminder when divided by two then it even 

function checkEvenNumbers(num){
    if(num%2===0){
        console.log(`The number ${num} is Even`);
        
    }
    else{
        console.log(`The number ${num} is Odd`);
    }
}
checkEvenNumbers("59")

/* Create a function checkPassword(password) that checks if the
 password length is greater than 8 characters. */

 function checkPassword(password){
    if(!password.length>8){
        console.log("Password is weak");
        
    }
    else{
        console.log("Password is strong");
    }
    
 }
checkPassword("123456789")
