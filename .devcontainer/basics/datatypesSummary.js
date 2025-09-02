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

// const bigNumber = 3456543576654356754n to represent at last after the number add n
/*
JavaScript is a dynamically typed language.
This means that:
Type checking occurs at runtime:
The type of a variable is determined when the code is executed, not during a separate compilation phase.
No explicit type declarations:
You do not need to declare the data type of a variable when you create it. JavaScript infers the type based on the value assigned. 
Variable types can change:
Q>Is java a statistically typed lang or dynamically typed language?---------------------
A variable can hold values of different types throughout its lifetime in the program. For example, a variable initially holding a number can 
later be reassigned to hold a string.
In contrast, statically typed languages (like Java or C++) require explicit type declarations, and type checking occurs at compile-time,
  preventing type-related errors before runtime.
/*

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3