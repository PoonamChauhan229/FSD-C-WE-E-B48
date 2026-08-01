const express = require('express')
// router level
const router=express.Router()
const {getMovies,displayTesting}=require('../controllers/movieController')

//Get Method >> Route >> /movies
router.get('/movies',getMovies)
router.get("/testing",displayTesting)

// exported properly
//cjs
module.exports=router

// your routes 


