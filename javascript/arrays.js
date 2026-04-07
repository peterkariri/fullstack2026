//to define an array we use the square brackets [] or the array constructor  /**
/* //to add and remove elements from an array  */
/* to add or remove elements we use a couple of methods {
    push>>this refers to adding an element at the end of an array
    pop>>this is used to remove the last element of an array
    unshift>>this is used to add an element at the beginning of an array
    shift>>this is used to remove the first element of an array
    splice>>this is used to add or remove an element at a specific index in an array
    slice>>this is used to create a new array from a portion of an existing array
    indeof>>this is used to check if an element exists in an array and returns the index of the first occurrence
     of the element in the array or -1 if it is not found
     length>>this is used to check the number of elements in an array>>starts counting from 1
     includes>>this is used to check if an element exists in an array and returns a boolean value(true/false)
     join>>this is used to join all elements of an array into a string and returns the string
     reverse>>this is used to reverse the order of the elements in an array
     sort>>this is used to sort the elements of an array in place and returns the sorted array
     concat>>this is used to merge two or more arrays and returns a new array
     indexOf>>this is used to check if an element exists in an array and returns the index of the first occurrence
   
} */
//push method

let primeNumbers=[2,3,5,7]
console.log(primeNumbers);

primeNumbers.push(11)
console.log(primeNumbers);

//pop method
primeNumbers.pop()
console.log(primeNumbers);
//shift method
primeNumbers.shift()
console.log(primeNumbers);
//unshift method
primeNumbers.unshift(1,2,3,4,5,6)
console.log(primeNumbers);

//slice
primeNumbers.slice(0,4)
console.log(primeNumbers);

console.log(primeNumbers.indexOf(4));


let statement="john ate the delicious food "

let splitString=statement.split(" ").reverse().join(' ');
console.log(splitString);


let fruits=["mangoes","oranges","bananas","grapes"];

let shoes=["nike","adidas","puma","reebok"];
//to merge these two arrays we use the concat 

let newItems=fruits.concat(shoes);
console.log(newItems);
