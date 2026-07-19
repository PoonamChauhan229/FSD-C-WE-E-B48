// web server >> receive req  >> sends res
// build apis
// endpoints 
//GET request >> easily viewable in browser
const http=require('http')
const server=http.createServer((req,res)=>{
    // res.write("Welcome to Node")
    // res.end()
    if(req.url==="/"){
        res.write("Welcome to Home Page")
        res.end()
    }
    else if(req.url==="/about"){
        // simple text >> data+ business logics
        res.write("Welcome to About Page")
        res.end()
    }
    else{
         res.write("Page not found")
        res.end()
    }
})

// make sure ur server listening to some Port 
// FE >> 5173 
// BE >> 8000 >> listen
server.listen(8000,()=>{
    console.log("Server is running at port 8000")
})
//locahost:8000 >>http://localhost:8000/