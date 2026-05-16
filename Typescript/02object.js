"use strict";
// Objects >>
// key: value || propertyname :propertyValue
// {propertyname1 :datatype,propertyname2 :datatype}={propertyname1 :value,propertyname2 :value}
let studentDetails = { name: "abc", age: 45, course: "TS", seatAvailbilty: true };
console.log(studentDetails);
let student2Details;
student2Details = { name: "xyz", age: 35, course: "TS", seatAvailbilty: false };
console.log(student2Details);
//optional ? >> optional property 
// TS only allows defined properties
let student3Details; // mandatory
student3Details = { name: "pqr", age: 35, course: "TS" };
console.log(student3Details);
// Nested objects:
let employees;
employees = {
    empid: 123,
    empName: "Divya",
    address: {
        city: "Chennai",
        postalCode: 678900
    },
    greet: function () {
        console.log("Hello");
    },
    addSum: (a, b) => a + b, // defining a function
    greet5: (x) => `Hello ${x}`
};
console.log(employees.address.city); // nested properties 
console.log(employees);
employees.greet();
console.log(employees.addSum(3, 5)); //invocation
console.log(employees.greet5("Poonam"));
const stu1 = {
    id: 1,
    name: "abc",
    age: 25,
    course: "TS"
};
const stu2 = {
    id: 2,
    name: "xyz",
    age: 25
};
const stu3 = {
    id: 3,
    name: "pqr",
    age: 25
};
console.log(stu3.name);
console.log(stu1, stu2, stu3);
stu3.name = "qwe";
console.log(stu3.name);
//stu3.id=45 //Cannot assign to 'id' because it is a read-only property
console.log(stu3.id);
let name56 = "Poonam";
let name57 = "Divya";
console.log(name56, name57);
// Array of objects >> real projects
let StudGuvi = [{
        name: "abc",
        age: 26,
        course: "TS"
    }, {
        name: "xyz",
        age: 27,
        course: "TS1"
    }, {
        name: "pqr",
        age: 29,
        course: "TS2"
    }];
console.log(StudGuvi);
let StudGuvi1 = [stu1, stu2, stu3];
console.log(StudGuvi1);
let StudGuvi2 = [stu1, stu2, stu3];
console.log(StudGuvi2);
