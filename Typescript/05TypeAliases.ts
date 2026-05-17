// stu1 stu2 stu3 stu4 .......................n 50
// 50 type declarations + 50 pass value
// repitition >> Type Alias
// readonly >> no change

type Student={
    readonly id:number
    name:string,
    age:number,
    course?:string
}

const stu1:Student={
    id:1,
    name:"abc",
    age:25,
    course:"TS"
}

const stu2:Student={
    id:2,
    name:"xyz",
    age:25
}

const stu3:Student={
    id:3,
    name:"pqr",
    age:25
}
console.log(stu3.name)
console.log(stu1,stu2,stu3)
stu3.name="qwe"
console.log(stu3.name)
//stu3.id=45 //Cannot assign to 'id' because it is a read-only property
console.log(stu3.id)

type fullName=string;
let name56:fullName="Poonam"
let name57:fullName="Divya"

console.log(name56,name57)
// Array of objects >> real projects
let StudGuvi:{
    name:string,
    age:number,
    course?:string
}[]=[{
    name:"abc",
    age:26,
    course:"TS"
},{
    name:"xyz",
    age:27,
    course:"TS1"
},{
    name:"pqr",
    age:29,
    course:"TS2"
}]

console.log(StudGuvi)

let StudGuvi1:{
     readonly id:number
    name:string,
    age:number,
    course?:string
}[]=[stu1,stu2,stu3]
console.log(StudGuvi1)

let StudGuvi2:Student[]=[stu1,stu2,stu3]
console.log(StudGuvi2)


// Object Types 
// Optional & Readonly Properties
// Interfaces vs Type Aliases

type Status=string|number|boolean
let name58:Status="success"
console.log(name58)

type Valid="Yes"|"No"|"Maybe"
let name59:Valid="Yes"
console.log(name59)

// unions
// tuples
// primitive datatypes

type ClassOne={
    readonly id:number
    name:string,
    age:number,
    course?:string
}

type ClassTwo={
    postalCode:number,
    state:string,
    city:string
}

// Intersection "&"

type ClassThree=ClassOne & ClassTwo

const c1: ClassThree = {
    id: 1,
    name: "abc",
    age: 25,
    postalCode:78909,
    state:"TN",
    city:"Chennai"
}
console.log(c1)