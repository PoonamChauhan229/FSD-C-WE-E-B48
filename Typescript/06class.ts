// JS/TS >> classess >> OOP

//class  >> blueprint >> object
// TS classess >> JS classess

// class className{
    // p1:t1;
    // p2:t2
    // constructor(){
    //     console.log("test")
    // }
// }

// holding 2 properties , name & age
// blueprint
class UserDetails{
    // type >> of that object >> accepted construstor >> this(current object)
    // variable declaration keywords not used here
    a:string;
    b:number;
    course:string;
    hobby:number;
    userId:number;
    // special function >> which is called immediately when u create ainstance a class
    // property >> need constructor >> refers directly to the object properties

    constructor(name:string,age:number,course:string,userId:number){ // parameters >> value will ne assigned 
        console.log("test")
        this.a=name; //a=guvi
        this.b=age; //b=25
        this.course=course;
        this.hobby=56
        this.userId=userId
    }
    // methods
    display(){
        console.log(`My name is ${this.a} & age is ${this.b} & i love cousre ${this.course} very much` )
        console.log(this.hobby+this.userId)
    }

}
// Property 'name11' has no initializer and is not definitely assigned in the constructor.
//  Property 'age11' has no initializer and is not definitely assigned in the constructor
// create that object >> instance of that class >> new keyword

const ud1=new UserDetails("Guvi",25,"TS",420) // values
console.log(ud1)
ud1.hobby=90
console.log(ud1)
// test         >> constructor will be called
// UserDetails {}
const ud2=new UserDetails("test25",125,"JS",120) // values
console.log(ud2)
ud1.display()
ud2.display()

