const express = require('express')
// console.log(express)
const app = express()
// app itself everywhere >> rule 1
// app.functionName()
// PORT No
// listen() >> listen to our PORT >> it will create a server
const PORT = 8000
// http://localhost:8000/
// Cannot GET / >> GET Request >> get() >> 2 args 
// Routing >> HomePage Route
// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to HomePage")
})
// About Page
app.get("/about", (req, res) => {
    res.send("<h1>Welcome to About Page</h1>")
})
// Routes >> json/object/array

// /movie
// json
app.get("/json", (req, res) => {
    res.send({
        "name": "test123",
        "age": 34
    })
})
// array
app.get('/array', (req, res) => {
    res.send(["1", 2], 3, 4)
})

//array of objects
app.get('/movies', (req, res) => {
    res.send(
        [
            {
                "rating": 7,
                "title": "Taj Mahal2",
                "poster": "https://im.rediff.com/news/2025/sep/30the-taj-story.jpg",
                "trailer": "https://www.youtube.com/embed/rFDGTuwAnbk",
                "desc": "The TAJ Story - Official Trailer | Paresh Rawal, Zakir Hussain, Amruta K | Tushar A Goel | 31st Oct",
                "id": "2"
            },
            {
                "rating": 74.6525,
                "title": "Bahubali",
                "poster": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/29.jpg",
                "trailer": "https://loremflickr.com/3140/1298?lock=4892934783655518",
                "desc": "Bibo timidus vespillo.\nAlter solvo placeat.\nTimor sono alioqui rerum denique curto xiphias.\nVito allatus coma speculum nam venia uxor ullam deinde.",
                "id": "3"
            },
            {
                "rating": "10",
                "title": "Guvi Geek",
                "poster": "https://avatars.githubusercontent.com/u/14211962",
                "trailer": "https://loremflickr.com/2800/3471?lock=6696182390118483",
                "desc": "Guvi GeekClibanus considero canto.Cupressus atqui ut paens.Quaerat advenio barba usitas.Sint confido sui assentator aurum victus cubitum vilis.",
                "id": "4"
            }
        ]
    )
})

app.get("/testing",(req,res)=>{
    res.send("Testing")
})
console.log("24212454aaa5124")

//server >> listen >> last line >> rule 2
app.listen(PORT, () => {
    console.log(`Server started at  port No : ${PORT}`)
}) // 2 args

// 12 o clock