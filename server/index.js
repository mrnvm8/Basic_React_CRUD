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

app.post('/create', (req, res) =>{

    const {firstName, lastName, gender, grade} = req.body.inputs;

    console.log(req.body.inputs);

    var query = db.query('INSERT INTO Student (FirstName, LastName, Gender, Grade) VALUES(?, ?, ?, ?)', 
                [firstName, lastName, gender, grade], (err, result) =>{
                    if(err){
                        console.log('Error in inserting data')
                    }else{
                        res.send('Insert was successfully')
                    }
                })
});

app.listen(port, ()=>{
    console.log(`Server is listening on port localhost:${port}`);
});