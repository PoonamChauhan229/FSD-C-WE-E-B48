const express = require('express') // module
const app = express()
const PORT = 8000
const movieRoute=require('./routes/movieRoute')// file 
// Routing >> HomePage Route
// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to 2nd Express Project")
})

// import >> mounting the routes
app.use(movieRoute) // register the middleware , mount routes

app.listen(PORT, () => {
    console.log(`Server started at  port No : ${PORT}`)
}) 