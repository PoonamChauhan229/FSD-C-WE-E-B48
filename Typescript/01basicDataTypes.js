"use strict";
// let num=15
// type declaration is must
let num = 45;
console.log(num);
// let nameone="Ram"
let nameone = "Ram";
console.log(nameone);
// datatype:
let studentName = "Asha";
const course = "Typescript";
let isActive = true;
let ageNumber = 45;
let price = 99.99;
console.log(studentName, course, isActive, ageNumber, price);
// Arrays & objects
//Array of numbers
// let scores=[90,89,78]
let scores = [90, 78, 56, 99.9];
console.log(scores);
//Array of string
let fruits = ["oranges", "mangoes", "sweetlime"];
console.log(fruits);
let active = [true, false];
console.log(active);
// Any >>>Array of mix  >> any >>less safe
let arr = ["hello", true, 99];
console.log(arr);
// Recommended >> Union Types
let arr1 = ["test12", "test1234", 90, 90, 90, true];
console.log(arr1);
// Tuple >> Array >> fixed
let employees = [101, "test12"];
console.log(employees);
let products;
products = ["test123", 45, true];
console.log(products);
