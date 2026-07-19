// path >> directory path/folder
const path=require('path')
// join()
const filePath=path.join("users","images","profile.jpg")
console.log(filePath)
//basename()
const file=path.basename(filePath) // 
console.log(file) //profile.jpg
//dirname()
const filedirname=path.dirname(filePath) // 
console.log(filedirname) 
// u can upload .jpg/png files
// extname()
console.log(path.extname("profile.jpg"))
//resolve() > create a absolute path
const filePathjoin=path.join("users","images","profile.jpg")
console.log(filePathjoin) //users\images\profile.jpg

const fileabsol=path.resolve("users","images","profile.jpg")
console.log(fileabsol)//D:\Live-SessionTaken-main\FSD-C-WE-E-B48\NodeJS\coremodules\users\images\profile.jpg

//isAbsolute() >> true / false
console.log(path.isAbsolute(filePathjoin)) //false
console.log(path.isAbsolute(fileabsol))    //true

//__direname
console.log(__dirname) //D:\Live-SessionTaken-main\FSD-C-WE-E-B48\NodeJS\coremodules  >> exact path ur file located
let newpath=path.join(__dirname,"users","profile.txt")
console.log(newpath)

// real time example >>  create a new path >> file will be created
const fs=require('fs')
fs.writeFile(newpath,"test",(err)=>{
    if(err){}
    console.log("created")
})
