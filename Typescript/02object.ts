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


