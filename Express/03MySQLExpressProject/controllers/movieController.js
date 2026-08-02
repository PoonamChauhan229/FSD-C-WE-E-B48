const db = require('../db/db')
// CRUD
// GET
// READ
const getMovies = (req, res) => {
    // DB is connected >> Fetch the from DB >> movies table
    const sql = "SELECT * FROM MOVIES"
    console.log(sql)

    db.query(sql, (err, result) => {
        if (err) {
            // console.log(err)
            return res.send(err)
        } else {
            // console.log(result)
            return res.send(result)
        }
    }
    );

}

// READ BY ID
const getSingleMovies = (req, res) => {
    // DB is connected >> Fetch the from DB >> movies table
    const sql = "SELECT * FROM MOVIES WHERE ID=?"
    const values=req.params.id
    console.log(sql)

    db.query(sql, values,(err, result) => {
        if (err) {
            // console.log(err)
            return res.send(err)
        } else {
            // console.log(result)
            return res.send(result)
        }
    }
    );

}

// CREATE
// POST
const addMovies = (req, res) => {
    // console.log("req.body",req.body)
    // DB is connected >> Fetch the from DB >> movies table
    const sql = "INSERT INTO movies (title, rating, poster, trailer, description) VALUES (?,?,?,?,?)"
    // const values=['Batman', 7.5, 'https://im.rediff.com/news/2025/sep/30the-taj-story.jpg', 
    // 'https://www.youtube.com/embed/rFDGTuwAnbk', 'The TAJ Story - Official Trailer | Paresh Rawal, Zakir Hussain, Amruta K | Tushar A Goel | 31st Oct']
    const { title, rating, poster, trailer, description } = req.body
    const values = [title, rating, poster, trailer, description]
    console.log(sql, values)

    db.query(sql, values, (err, result) => {
        if (err) {
            // console.log(err)
            return res.send(err)
        } else {
            // console.log(result)
            return res.send(result)
        }
    }
    );

}

// UPDATE >> middleware>> express.json()
// PUT
const updateMovies = (req, res) => {
    // console.log("req.body",req.body) >> body
    // console.log("req.params.id",req.params.id)//>> url
    // DB is connected >> Fetch the from DB >> movies table
    const sql = "UPDATE movies SET title=?, rating=?, poster=?, trailer=?, description=?  WHERE id = ?"
    const id = req.params.id
    const { title, rating, poster, trailer, description } = req.body
    const values = [title, rating, poster, trailer, description, id]

    // console.log(sql,values,req.params.id)

    db.query(sql, values, (err, result) => {
        if (err) {
            // console.log(err)
            return res.send(err)
        } else {
            // console.log(result)
            return res.send(result)
        }
    }
    );

}

// DELETE
const deleteMovies = (req, res) => {
    // console.log("req.body",req.body)
    // DB is connected >> Fetch the from DB >> movies table
    const sql = "DELETE FROM movies WHERE id = ?"
    const values = [req.params.id]
    console.log(sql, values)

    db.query(sql, values, (err, result) => {
        if (err) {
            // console.log(err)
            return res.send(err)
        } else {
            // console.log(result)
            // return res.send(result)
            // err handling
            if (result.affectedRows ==0) {
                return res.send({
                    message: "Deleted Unsuccessfull",
                    Found: "ID not found",
                    sqlResponse: result.affectedRows
                })
            } else {
                return res.send({
                    message: "Deleted Successfully",
                    sqlResponse: result.affectedRows
                })
            }

        }
    }
    );

}
//all functions
const displayTesting = (req, res) => {
    res.send("Testing123")
}

module.exports = { getMovies, displayTesting, addMovies, updateMovies, deleteMovies,getSingleMovies }

// error handling >> Application shouldnt crash
// async >> try catch >> React 