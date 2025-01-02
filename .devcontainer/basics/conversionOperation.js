// let score=44
// let score="44"
// let score="44fff"//in string string Number NaN
// let score=null //object object number 0
// let score=undefined//unde und number NaN
let score =true //bol bol number 1



// console.log(typeof score)
// console.log(typeof (score))

// let valueInnumber =Number(score)
// console.log(typeof valueInnumber)
// console.log(valueInnumber)
/*
"33 => 33"
"33abc=>NaN"
"true =>1;false =>0"
*/
// let isLoggedin=""//false
// let isLoggedin="sure"//true for 1 true 0 false
// let isLoggedin=null //false
// let isLoggedin=undefined //false
let isLoggedin=NaN  //false


let booleanIsLoggedIN=Boolean(isLoggedin)
console.log(booleanIsLoggedIN)
 

// similarly for String
let num=45
let numTostring=String(num)
console.log(typeof numTostring)
console.log(numTostring)

/* ****OPerations ***************
//console.log(2**3)---it means 2^3==8
and add,sub,mul,div ,rem i know

*/
let str1="hello"
let str2="raju"
let str3=str1+str2
console.log(str3+" mistry");

console.log(3+4*7/5)
//dont do these type of tricky operations
// it is ok for exams but in development 
// it is useless
// instead
// Use
console.log((3+4)/7)//can use in paranthesis
// to be more readable4

// again next thing is 
console.log(+true)//basically it gives the value1
console.log(+false)//similarly hero value of false 0 if we give negative the it will print negative 0 in false negative 1 in true
console.log(+"")//0
//sincle true value is 0 so it will print 1 
// console.log(true+)//error

let num1,num2,num3
num1=num2=num3=2+2//dont write tricky code like this focus on readability because people will read your code
let gameCounter=100
gameCounter++
console.log( ++gameCounter)

