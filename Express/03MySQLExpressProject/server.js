const express = require('express') // module
const app = express()
const PORT = 8000
const movieRoute=require('./routes/movieRoute')// file 
const {myLogger,stopApp,test}=require('./middleware/middleware.js')
// import it here 
const db=require('./db/db.js')
// Routing >> HomePage Route
// Home Route
// TEst the middleware before any of the route
app.use(express.json()) // conversion into string -obj || json-str
app.use(stopApp)
app.use(myLogger)
app.get("/",test,(req, res) => {
    res.send("Welcome to 2nd Express Project")
})

// import >> mounting the routes
app.use(movieRoute) // register the middleware , mount routes


app.listen(PORT, () => {
    console.log(`Server started at  port No : ${PORT}`)
}) 

//middleware >> Start Challenge >>  Plain Road(Start Point) >>>Blocks(HUrdle)>>Plain Road(Destination)
// app.get("/", middleware,(req, res) => {})

// signin >>access to all pages
// signin >> access to app (entry point)
// middle(correct user) >>access to all pages
