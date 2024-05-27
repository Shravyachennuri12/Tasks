//Addition (+)
let a = 10;
let b = 5;
let sum = a + b; 
console.log(sum); 


//Subtraction (-)
let c = 20;
let d = 8;
let difference = c - d; 
console.log(difference); 

//Multiplication (*)
let e = 7;
let f = 6;
let product = e * f; 
console.log(product); 

//Division (/)
let g = 50;
let h = 10;
let quotient = g / h; 
console.log(quotient); 

//Remainder (%)
let i = 29;
let j = 4;
let remainder = i % j; 
console.log(remainder); 

//Exponentiation (**)
let k = 3;
let l = 4;
let power = k ** l; 
console.log(power); 

//Arrays
let fruits = ["Apple", "Banana", "Cherry"];

//Array of objects
let people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 35 }
];

console.log(people[1].name); 

//implicite coersion
let num = 10;
let str = "20";

let result = num + str;

console.log(result);

//explicit coersion

let str1 = "20";
let num1 = parseInt(str);

console.log(num); // Output: 20

