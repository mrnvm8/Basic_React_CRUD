const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Lindo.1.',
    database: 'SchoolDB'

});

//Testing the connection from the database
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


//Create a new /students
app.post('/create', (req, res) =>{

    //getting data from the form in the interface
    const {firstName, lastName, gender, grade} = req.body;
    //const {firstName, lastName, gender, grade} = req.body.inputs;
    //saving the data to database
    var query = db.query('INSERT INTO Student (FirstName, LastName, Gender, Grade) VALUES(?, ?, ?, ?)', 
                [firstName, lastName, gender, grade], (err, result) =>{
                    if(err){
                        console.log('Error in inserting data')
                    }else{
                        res.send('Insert was successfully')
                    }
                })
});

/**? Getting All the Student */
app.get('/students', (req, res) =>{
    var query = db.query('SELECT * FROM Student', (err, result) =>{
        if(err){
            console.log('Error in Getting data')
        }else{
            res.send(result)
        }
    })
});

/**? Getting a the Student based on id */
app.get('/getStudent/:id', (req, res) =>{
    //Getting the parameter Id from the http request
    const { id } = req.params;
    //Student_Id,FirstName, LastName, Gender, Grade
    var query = db.query('SELECT * FROM Student WHERE Student_Id = ?',
            [id], (err, result) =>{
        if(err){
            console.log('Error in Getting data')
        }else{
            res.send(result)
        }
    })
});


//Create a new /students
app.put('/update/:id', (req, res) =>{

    const { id } = req.params;
    //getting data from the form in the interface
    const { FirstName, LastName, Gender, Grade} = req.body;

    //saving the data to database
    var query = db.query(`UPDATE Student SET FirstName =?, LastName = ?, Gender = ?, Grade = ? WHERE Student_Id = ?`, 
                [FirstName, LastName, Gender, Grade, parseInt(id)], (err, result) =>{
                    if(err){
                        console.log('Error in inserting data ' + err.message);
                    }else{
                        res.send('Insert was successfully')
                    }
                })
});

/**? Deleting data based on the received parameter */
app.delete('/delete/:id', (req, res) =>{
    //Getting the parameter Id from the http request
    const { id } = req.params;
    //deleting the data
    var query = db.query('DELETE FROM Student WHERE Student_Id = ?;', 
                [id], (err, result) =>{
                    if(err){
                        console.log('Error in deleting data')
                    }else{
                        res.send('Successfully deleted')
                    }
                })
});

app.listen(port, ()=>{
    console.log(`Server is listening on port localhost:${port}`);
});