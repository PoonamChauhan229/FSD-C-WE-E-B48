// function type to parameters :numbers
//return type :numbers

function add(a:number,b:number):number{
    return a+b
}
console.log(add(3,5))

function greet(name:string):string{
    return "Hello "+name
}
console.log(greet("Poonam"))

// no return >> console statement

function greet1(name:string):void{
    console.log("Hello "+name)
}
greet1("Guvi")

// option parameters  >> ?
// name , age
function greet3(name:string="Guest",age?:number):void{
    console.log("Hello "+name+","+age)
}
greet3("Guvi",20)
greet3("Ashish",25)
greet3("Divya") // not passing age
greet3() // not passing age

const square=(num:number):number=>num*num
console.log(square(5))

// function >> parameter : array 
// getTotal([10,20,30])

// 10:55 >>11:10-11:20


function getTotal(arr:number[]):number{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(getTotal([10,20,30]));


// wrt to Functions >>
// any functions >> type || interface
// 11:15 - 11:30


// interface
// AddFunction

interface AddFunction{
    (a:number,b:number):number;
}

const add5:AddFunction=(x,y)=>x+y
console.log(add5(3,4))

type AddFunction1={
    (a:number,b:number):number;
}

const add6:AddFunction1=(x,y)=>x+y
console.log(add6(3,5))

type AddFunction2=(a:number,b:number)=>number;

const add7:AddFunction2=(x,y)=>x+y
console.log(add7(3,6))
