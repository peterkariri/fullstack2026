//objects are a collection of key value pairs. 
// we can define an object using the curly braces {} or the object constructor
let person={
    name:"Remmy",
    age:25,
    profession:"Developer",
    hobbies:["coding","gaming","traveling"],
    greet:function greet(){
        console.log(`Hello, my name is ${this.name} and I am a ${this.profession}`);
    }
};
console.log(person);
//to access the properties of an object we use the dot notation which is simpler 
console.log(`My name is ${person.name} and I am ${person.age}
 years old where I am a Professional ${person.profession} with a hobby in ${person.hobbies[1]}`);

 //to access the method of an object we use the dot notation as well
 person.greet();