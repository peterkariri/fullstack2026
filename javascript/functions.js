/* a function is a reusable block of code that is used to perform a specific task {
    we use functions{
        they are reusable
        they help to break down complex problems into smaller, 
        more manageable pieces
        they can take in parameters and return values
        avoiding repetition of code 
        it keeps the code clean 
    }
} */

   /*  to define a function we have thre methods {
        the function declaration method>>we start by the keyword function
         then followed by the function name then the brackets 
         where the paramenters will fall under then the curly 
         brackets fro teh code block 

         function greeting(parameters){
            //code goes here
         }
         to execute it we need to call it >>this is done via typing the 
         functionname and the bracket()

         example calling greeting{
            greeting(argumnets);
         }
    } */
      /*  {
        the parameters are just placeholder for tvalues that will be 
        passed into the function when it is called

        are pased by value and also passed by reference >>referencing the storage in the memory
       } */
       /*   functions use the return keyword to return a value from the function 
         and it also terminates the function execution 
         to stop the function from terminating we avoid using the retun keword 
         in development but in production we use it explicitly
         */

         function addNumbers(num1,num2){
            console.log(num1+num2);

         }
         
         addNumbers(1020,3000000);


         /* using function expression method>>we start by declaring a 
         variable then we assign it to an anonymous function
         in here we also use the function keyword but we dont name the function because we are assigning it to a variable name 
         to run the function we invoke the variable name and the brackets() */


         let multiplyNumbers=function(x,y,z){
            //return x*y*z;//code has terminated here because of the return keyword
            console.log(x*y*z);
            
         }
        multiplyNumbers(2,4,6)
         
      /*   the third method used to define a function is the arrow function method(fat arrow)
      this is the cleanest and most modern way to define a function in javascript
      we start by declaring a variable then we assign it to an arrow function 
      we use the fat arrow syntax (=>) to define the function body 
      to run the function we invoke the variable name and the brackets() 
      */

      let divideNumbers=(a,b) => {
        console.log(a/b);
        
      }

      divideNumbers(10000000,7)