/* callbacks {
    a callback is a function that accepts another function as an argument 
    this is normally used in executing asynchronous programming
}
glovo{ asynchronous execution
    you order food provide details{number and email location }

    when your food is ready they call or send notification that its ready for delivered 

    on delivery once reached they call you 
}
 */
//raw function 

//synchronous function >>runs immediately 
function greet(){
    console.log("hello");
    
}
greet()

//asynchronous>>runs only when called or ater a set timeout

function greetings(){   
    console.log("hello Remi");    
    
} //the main function that has been passed as an argument 

function processUserInput(callback){ //callback function  that accepts the main function as an argument 
    callback();  //calling the callback function 
    
}

processUserInput(greetings)


//combining one logic for callback and one logic for main function 

//define main function 



function sayBye(){
    console.log("good bye");
    
}

sayHi("Remi",sayBye);

function sayHi(name,sayBye){
 console.log("hell0" + name) ;
   sayBye()
}

//creating a callback using a anonymous function >>shortening a callback

sayHi("Peter", function(){
    console.log("goodbye for today ");
    
})

//using the setTimeout used in dom>>delay the time in executing a function 

setTimeout(function(){
      //slideshows //testimonials
      console.log("hello welcome to the final use of callbacks before promises ");
      
},5000)

///callback hell >>assingment never ever go into callback hell 

//promises>> what is a promise means that i will delier something but not now but i will deliver 
//a promise in technical terms means an object that represents a value that will be available in time 
//it always executes {
/* 
once goods are ordered they give you a tracking number (promise)
you either get the deliver or not 
} 
 promises only have three states/status {
 
 pending>>still working 
 fulfilled>>success (200-ok)
 rejected>>failed 
 }
promises take two parameter{>>they are functions that ar prebuilt in side js 
resolve >success immediatly after everything runs smoothly 
reject >>fail
}
the promise constructor >>we use the new promise to define a promise >>telling js to start a task that willbe executed in future 
new Promise((resolve,reject)=>{ 
    //execute code 
    })
*/
 let promise=new Promise((resolve,reject)=>{
    resolve("success")
      reject("access denied") //once a promise is resolved this is ignored 
})

//once a promise is successful we can run the .then continuation which mean that if a promise has been made whats next 
//we do this by chaining the .then in the promise itself 

/* promise.then((result)=>{
    console.log(result);  
})
//catch is used to contain the reject 
.catch((error)=>{
    console.log(error);
    
}) */

//cleaner 

promise
   .then(result => console.log(result))
   .catch(error => console.log(error) )