let a=50
a="text"
a=true
a=[1,2,3]

console.log(a)

// number datatype to string datatype >> TS will not allow

let age =25
age="twenty-five"
console.log(age)

//same TS >> throw error

function greet2(name,age){
    console.log("Hello "+name+","+age)
}
greet2("Guvi",20)
greet2("Ashish",25)
greet2("Divya") // not passing age