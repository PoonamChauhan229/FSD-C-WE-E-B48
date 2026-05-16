// Objects >>
// key: value || propertyname :propertyValue
// {propertyname1 :datatype,propertyname2 :datatype}={propertyname1 :value,propertyname2 :value}

let studentDetails: { name: string, age: number, course: string, seatAvailbilty: boolean } = { name: "abc", age: 45, course: "TS", seatAvailbilty: true }
console.log(studentDetails)


let student2Details: { name: string, age: number, course: string, seatAvailbilty: boolean }
student2Details = { name: "xyz", age: 35, course: "TS", seatAvailbilty: false }
console.log(student2Details)

//optional ? >> optional property 
// TS only allows defined properties
let student3Details: { name: string, age: number, course: string, seatAvailbilty?: boolean } // mandatory
student3Details = { name: "pqr", age: 35, course: "TS" }
console.log(student3Details)

// Nested objects:
let employees:{
    empid:number,
    empName:string,
    address:{
        city:string,
        postalCode:number
    },
    greet:()=>void,
    addSum:(a:number,b:number)=>number, // type of a function
    greet5:(x:string)=>string
}

employees={
    empid:123,
    empName:"Divya",
    address:{
        city:"Chennai",
        postalCode:678900
    },
    greet:function(){
        console.log("Hello")
    },
    addSum:(a,b)=>a+b, // defining a function
    greet5:(x)=>`Hello ${x}`
}
console.log(employees.address.city) // nested properties 
console.log(employees)
employees.greet()
console.log(employees.addSum(3,5)) //invocation
console.log(employees.greet5("Poonam"))


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