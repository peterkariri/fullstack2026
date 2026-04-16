/* loops >>this are used to run a particular code until a termination is found /
something that runs forever until a particular condition is met 
examples of loops{
    for loop 
    forEach loop 
    for of 
    do while 
    while 
}
they have a syntax{
    initialization >>to start a loop at a particular point 
    scope/limit(condition) >>the condition that the loop should meet 
    increment/decrement >>increase or d\ecrease in the instances that the particular condition should meet
}

for loop {
    for(let i=initialized number ;i<condition;i++){

    }
} */

    let item=["shoes","cars","flowers","students","animals"]
    for(let i=0;i<item.length;i++){
        console.log(item[i]);
        
    } 

   /*  while loop >>this is a loop that is used when we dont know how many times we are going to execute something ,
    in this loop it can infinite if not well strucutred >> increment or decreent not included in the beginning 
    we initialise a variable outside the while loop then run the while loop targeting the varibale 
    without the increment the loop executes infinitely which can result into memory outspaced

    nb>this loop always runs as long as a condition is true
    */

    let number=0; //initialization
    while(number<=8){ //condition
        console.log(number);
        number++;
        
    }


    /* do ...item.. while 

    this here as opposed to the while loop this first executes or runs  at least once 
    before checking the condition then after checking the condition it runs for the specified logic 
     this means that this will always return one default output before executing condition 
    */
    
      
     let y=0
     do{
        console.log(y);
        y++;
        
     }
     while(y<10)
//to check if it always runs before checking condition first 
     
     let z=11
     do{
        console.log(z);
        z++;
        
     }
     while(z<10)

/*   for ...of >>this is the modern and clean version of the for loop 
  use it to access elements in an array mostly  
  
  we use the keyword item to make access and loop through the array name.variable name 
  */

  let array=["food","student","teacher","laptop"]

  for(let x of array){
    console.log(x);
    
  }
//using the foreach>>uses a fat arrow syntax >>clean and quick 

array.forEach((item)=>{
    console.log(item);
    
})