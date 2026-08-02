const mysql=require('mysql2')

// Create the connection to database >> calllback
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'root',
  database: 'MOVIESDB',
});

connection.connect((err)=>{
    if(err){
        console.log("DB Connection failed")
    }else{
        console.log("DB Connected Successfully")
    }
})

module.exports=connection