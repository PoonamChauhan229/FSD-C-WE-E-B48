const express = require('express')
// router level
const router=express.Router()
const {getMovies,displayTesting}=require('../controllers/movieController')
const {myLogger}=require('../middleware/middleware')

//Get Method >> Route >> /movies
router.get('/movies',getMovies)
router.get("/testing",myLogger,displayTesting)

// exported properly
//cjs
module.exports=router

// your routes 


