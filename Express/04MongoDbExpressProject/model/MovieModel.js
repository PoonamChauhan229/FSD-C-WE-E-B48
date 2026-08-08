const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        poster: {
            type: String,
            required: true,
            trim: true
        },
        trailer: {
            type: String,
            required: true,
            trim: true
        },
        rating: {
            type: Number,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    });

    const movieModel=mongoose.model("Movie",movieSchema)
    module.exports=movieModel