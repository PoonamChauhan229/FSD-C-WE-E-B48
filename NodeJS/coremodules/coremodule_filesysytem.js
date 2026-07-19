const fs=require('fs') // import >> cjs commonJS
// console.log(fs) // object


// writeFile() >> asynchrounusly >> doesnt block the code 
// () > filename > create a file + write in that file
//    > "what addition in file >> Hello everyone"
//    > cbk function >>()=>{err >> no err >>} // error handling
//    > While writing >> overwrite the data
//    > Asynchrouns
// fs.writeFile("sample.txt","NodejS FileSysytem",(err)=>{
//     if(err){
//         console.log("Error Found")
//         return
//     }
//     console.log("File created successfully")
// })
// fs.writeFileSync() //writeFileSync() >> snyncronously

//readFile()
fs.readFile("sample.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error Found")
    }
    // console.log(data)
})
//appendFile()
fs.appendFile("sample.txt","\n Laerning Node Module",(err)=>{
        if(err){
        console.log("Error Found")
        return
    }
    console.log("File updated successfully")
})
fs.rename("sample.txt","sampletest.txt",(err)=>{
    if(err){
        console.log("Error Found")
        return
    }
    console.log("File renamed successfully")
})

fs.unlink("sample.txt",(err)=>{
    if(err){
        console.log("Error Found")
        return
    }
    console.log("File deleted successfully")
})
// fs.mkdir()
fs.mkdir("Documents",(err)=>{
    if(err){
        console.log("Error Found")
        return
    }
    console.log("Folder creted successfully")
})
