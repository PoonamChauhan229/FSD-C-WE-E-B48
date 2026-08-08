const movieModel = require('../model/MovieModel')
// CRUD
// GET
// READ
const getMovies = async (req, res) => {
    // movieModel.find()
    const allMovie = await movieModel.find()
    res.send({
        message: "Movie Fetched Successfully",
        allMovie
    })

}

// READ BY ID
const getSingleMovies = async (req, res) => {
    // 6a76ca696480fe9e60c70d2f
    //:id >>req.params.id
    //console.log(req.params.id)
    const singleMovie = await movieModel.findById(req.params.id)
    res.send({
        message: "Movie Fetched Successfully",
        singleMovie
    })
}

// CREATE
// POST
const addMovies = async (req, res) => {
    // req.body
    // try catch >> if else 
    const movie = await movieModel.create(req.body)
    res.send({
        message: "Movie Created Successfully",
        movie
    })
}

// UPDATE >> middleware>> express.json()
// PUT
const updateMovies = async (req, res) => {
    // req.body , req.params.id
    const updatedMovies = await movieModel.findByIdAndUpdate(req.params.id, req.body,{new:true})
    res.send({
        message: "Movie Updated Successfully",
        updatedMovies
    })
}

// DELETE
const deleteMovies = async(req, res) => {
    const deletedMovies=await movieModel.findByIdAndDelete(req.params.id)
    res.send({
        message: "Movie deleted Successfully",
        deletedMovies
    })
}
//all functions
const displayTesting = (req, res) => {
    res.send("Testing123")
}

module.exports = { getMovies, displayTesting, addMovies, updateMovies, deleteMovies, getSingleMovies }

// error handling >> Application shouldnt crash
// async >> try catch >> React 