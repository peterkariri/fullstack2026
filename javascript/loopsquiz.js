//print number 1 to 20 
for(let i=0;i<=20;i++){
    console.log(i);
    
}
//print even numbers  from 1 to 50 
//use loops and conditional statement

for(let i=0;i<=50;i++){
    if(i%2==0){
        console.log(i);
        
    }
    
}

//find the sum of numbers from 1 to 100 
//this is a loop 
//initialization of sum (0) 
//how will i loop and also increment 
//where will this increment go 

let sum=0 //initialized sum as 0 >>for this is storage 

for(let z=1;z<=100;z++){

   sum+=z //sum=z+1
}
console.log(sum);


//school system that loops through your data ,calculates the result and gives me some thoughts 
//an object 



//loop through the array 
//access the scores of each student and rate them 

//total marks the students scored
//the top student 
//the lowest student 
let students=[

    {name:"Aila",score:90,},
    {name:"Remi",score:78,},
    {name:"Peter",score:67,},
    {name:"Luna",score:98,},
    {name:"Joan",score:34},
    {name:"John",score:54}
]
//declared and initialized all the variables needed 
let totalMarks=0;
let topStudent=students[0]
let lowestStudent=students[0]

for( let student of students){
//nested if else to rank them 
if(student.score>90 && student.score <=100){
    console.log(`${student.name} has an A`);
    
}
else if (student.score>80 && student.score<=90 ){
    console.log(`${student.name} has an B`);

}
else if (student.score>70 && student.score<=80 ){
    console.log(`${student.name} has an C`);

}
else if (student.score>60 && student.score<=70 ){
    console.log(`${student.name} has an D`);

}
else{
        console.log(`${student.name} has failed ,retake required`);

}
//total marks for the class score mean 

totalMarks= totalMarks+student.score
console.log(totalMarks);

//topstudent

if(student.score > topStudent.score){
    topStudent=student;
        

}
//lowest student
if(student.score < lowestStudent.score){
    lowestStudent=student;
        

}
}
console.log(`top student is ${topStudent.name}`);
console.log(`Lowest student is ${lowestStudent.name}`);

