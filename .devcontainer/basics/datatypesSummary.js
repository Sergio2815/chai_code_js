//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// // const bigNumber = 3456543576654356754n to represent at last after the number add n
// /*
// JavaScript is a dynamically typed language.
// This means that:
// Type checking occurs at runtime:
// The type of a variable is determined when the code is executed, not during a separate compilation phase.
// No explicit type declarations:
// You do not need to declare the data type of a variable when you create it. JavaScript infers the type based on the value assigned. 
// Variable types can change:
// Q>Is java a statistically typed lang or dynamically typed language?---------------------
// A variable can hold values of different types throughout its lifetime in the program. For example, a variable initially holding a number can 
// later be reassigned to hold a string.
// In contrast, statically typed languages (like Java or C++) require explicit type declarations, and type checking occurs at compile-time,
//   preventing type-related errors before runtime.


// // Reference (Non primitive)

// // Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// // https://262.ecma-international.org/5.1/#sec-11.4.3


// //+++++++++++++++++++++++++++++
// //Stack-it is used in all primitive ,when this is declared we 
// get a copy of the variable
// // ,Heap memory-it is used in all non primitive,when 
// we declare thi varibale we get reference of this variable


let mySchoolname="Shouryadarshan";
let anothername=mySchoolname
anothername="Raju"
console.log(mySchoolname)
console.log(anothername)//here i have first declared abother name is equal to
// original value but it doesnt changes the original its ust maeks its own copy and change sin its domain
// //here it can be asked if i have declare the anothername as myschoolname then why doent its 
// chnaged to rahu when prited in console so the reason is another name gets a copy
// of mySchoolname variable so whever we change its copy get changed so while printing in console
// original variable will give its original declaration and its copy will give what is declared and it is changes then its copy only gets chnaged 
//here stack is used so we get copies 

let user={
  email:"user@yahoo.com",
  name:"babu"
}
let user1=user;
user1.email="raju@google.com"
console.log(user.email)
console.log(user1.email)//refrence value ja rha hai dono ko ek hi reference mil rha  hai jo heap me store hota hai jisse dona ka values same aya
 //here when heap is we get reference value which simply means the value gets changed with the original value only
 