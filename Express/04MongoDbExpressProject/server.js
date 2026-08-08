

const express = require('express') // module
const app = express()
const PORT = 8000
const movieRoute=require('./routes/movieRoute')// file 

const dns=require('dns')
dns.setServers(['8.8.8.8','8.8.4.4'])
// import it here >> mongodb connection
const connectDB=require('./db/db.js')
connectDB()

app.use(express.json()) // conversion into string -obj || json-str >>req.body

app.get("/",(req, res) => {
    res.send("Welcome to 3rd Express Project")
})

// import >> mounting the routes
app.use(movieRoute) // register the middleware , mount routes


app.listen(PORT, () => {
    console.log(`Server started at  port No : ${PORT}`)
}) 


