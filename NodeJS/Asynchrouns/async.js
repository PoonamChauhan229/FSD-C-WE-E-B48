console.log("1") //sync      
setTimeout(()=>{console.log("Hi")},5000) // async >> non blocking
console.log(2) //sync
console.log(2)
console.log(2)
console.log(2)
setTimeout(()=>{console.log("Hi2")},3000)
console.log(2)
console.log(2)
console.log(2) //sync
console.log(2)
console.log(2)
console.log(2)
setTimeout(()=>{console.log("Hi3")},0)
console.log(2)
console.log(2) //sync
console.log(2)
console.log(2)
console.log(2)

// line 1 > excute in callstack
// line 2 > go in callastack >> pushed to webAPI >> callstack empty >> webapi delay 
// line 3 > excute in callstack

import isValidEmail from 'email-validation-js'
// const isValidEmail =require('email-validation-js') //>> project setup
console.log(isValidEmail)
const email = '123@gmail.com';
// console.log(isValidEmail(email));

import chalk from 'chalk';

console.log(chalk.red('Hello world!'));
// console.log(chalk.magentaBright.bgRed.bold('Hello world!'));

import validator from 'validator';
console.log("Test")
console.log("Validated",validator.isEmail('foo@barcom'))
let str="Hey everyonr nhjjkhj"
console.log("Validated String:",str.length,validator.isEmpty(str)) // true || false

// iEmpty >> emptiness >> length >> true || no length >> false

