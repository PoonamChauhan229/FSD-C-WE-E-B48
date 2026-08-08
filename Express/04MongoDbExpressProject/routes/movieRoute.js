const express = require('express')
// router level
const router=express.Router()
const {getMovies,displayTesting,addMovies,updateMovies,deleteMovies,getSingleMovies}=require('../controllers/movieController')
const {myLogger}=require('../middleware/middleware')

//Get Method >> Route >> /movies
router.get('/movies',getMovies)
router.get('/movies/:id',getSingleMovies)
router.post('/movies',addMovies)
router.put('/movies/:id',updateMovies)
router.delete('/movies/:id',deleteMovies)
router.get("/testing",myLogger,displayTesting)

// exported properly
//cjs
module.exports=router

// your routes 


