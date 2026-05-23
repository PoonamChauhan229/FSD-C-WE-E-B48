// any
// function print(value:any){
//     return value
// }
// print("x")
// let y=print(10)
// print(true)
// y.toUpperCase() // error
// // any >>dangerous

// Generics :Placeholder of a type

function print<T>(value:T):T{
    return value
}
// T >>Type placeholder >>actual value
print<number>(10) //function print(value:number):number{}
print<string>("xyz")//function print(value:string):string{}

function test<T>(arr:T[]):T{
    return arr[0];
}

// Mutipple Genrics
function test2<T,U>(a:T,b:U){
    return{a,b}
}
test2("GUvi",25)





