// let num=15

// type declaration is must
let num:number=45
console.log(num)

// let nameone="Ram"
let nameone:string="Ram"
console.log(nameone)



// datatype:
let studentName:string="Asha"
const course:string="Typescript"
let isActive:boolean=true
let ageNumber:number=45
let price:number=99.99

console.log(studentName,course,isActive,ageNumber,price)


// Arrays & objects
//Array of numbers
// let scores=[90,89,78]
let scores:number[]=[90,78,56,99.9]
console.log(scores)

//Array of string
let fruits:string[]=["oranges","mangoes","sweetlime"]
console.log(fruits)

let active:boolean[]=[true,false]
console.log(active)

// Any >>>Array of mix  >> any >>less safe
let arr:any[]=["hello",true,99]
console.log(arr)

// Recommended >> Union Types
let arr1:(string|number|boolean)[]=["test12","test1234",90,90,90,true]
console.log(arr1)

// Tuple >> Array >> fixed
let employees:[number,string]=[101,"test12"]
console.log(employees)

let products:[string,number,boolean]
products=["test123",45,true]
console.log(products)


