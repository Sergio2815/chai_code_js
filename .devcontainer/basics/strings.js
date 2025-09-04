const name="Shourya"
const repoCount=55
//i way of displaying it is
console.log(name+ repoCount)//this is generally not preferred
//another way of displayig is
console.log(`Hello mera name${name} and my repo count is ${repoCount}`  )
//String interpolation is a programming feature that allows for the embedding of expressions, 
// variables, or other code directly within a string literal. 
const gameName=new String('NewWaytoinitializeSTRING')
console.log(gameName)//here if i goto console and write this and above statement i will get all the string fucntions which are needed to learn
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))//here we passs number as we have to check at a given index which is
// at that position
console.log(gameName.indexOf('G'));
//note go through all string methods through mdn docs
const newString=gameName.substring(0,4)//it means it will display all all elements one less than the last index in this case i gave 4 so it will 
// display till 0-3 that is 0,1,2,3 
//if i start with negative then it will 
console.log(newString)

const anotherstr=gameName.slice(-8,3)
console.log(anotherstr)

const newStringOne="  hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim())//works in whitespaces removing the extra spaces that is there


const url="https://shourya.com/shoury%20adarshan"
console.log(url.replace('%20','-'))
console.log(url.includes('shourya'))
//practice more strings through mdn docs opening next time


