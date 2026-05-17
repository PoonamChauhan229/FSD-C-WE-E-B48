// use to defined datatype
// objects,functions,classes
// support readonly /optional propeties 

// both look similar

// Aliases
type User = {
    readonly id: number
    name: string,
    age: number,
    course?: string
}

// Interface

interface User1 {
    readonly id: number,
    name: string,
    age: number,
    course?: string
}



// Differnce
// Multplies time declare the interface >> Merging 
interface User1 {
    postalCode:number,
    state:string,
    city:string
}


const u1: User1 = {
    id: 1,
    name: "abc",
    age: 25,
    postalCode:78909,
    state:"TN",
    city:"Chennai"
}
console.log(u1)

