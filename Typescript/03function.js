"use strict";
// function type to parameters :numbers
//return type :numbers
function add(a, b) {
    return a + b;
}
console.log(add(3, 5));
function greet(name) {
    return "Hello " + name;
}
console.log(greet("Poonam"));
// no return >> console statement
function greet1(name) {
    console.log("Hello " + name);
}
greet1("Guvi");
// option parameters  >> ?
// name , age
function greet3(name = "Guest", age) {
    console.log("Hello " + name + "," + age);
}
greet3("Guvi", 20);
greet3("Ashish", 25);
greet3("Divya"); // not passing age
greet3(); // not passing age
const square = (num) => num * num;
console.log(square(5));
// function >> parameter : array 
// getTotal([10,20,30])
// 10:55 >>11:10-11:20
function getTotal(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(getTotal([10, 20, 30]));
