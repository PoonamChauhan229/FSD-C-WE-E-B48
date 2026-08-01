//arrow function 
let flag = false //>> DB Query >>
const getMovies = (req, res) => {
    if (flag) {
        return res.send(
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
    }
    return res.send("No Movies Found")

    // if else
}

//all functions
const displayTesting = (req, res) => {
    res.send("Testing123")
}

module.exports = { getMovies, displayTesting }

// error handling >> Application shouldnt crash
// async >> try catch >> React 