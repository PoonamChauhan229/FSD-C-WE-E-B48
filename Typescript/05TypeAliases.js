"use strict";
// stu1 stu2 stu3 stu4 .......................n 50
// 50 type declarations + 50 pass value
// repitition >> Type Alias
// readonly >> no change
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
let name58 = "success";
console.log(name58);
let name59 = "Yes";
console.log(name59);
const c1 = {
    id: 1,
    name: "abc",
    age: 25,
    postalCode: 78909,
    state: "TN",
    city: "Chennai"
};
console.log(c1);
