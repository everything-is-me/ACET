
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
        
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


// app.get('/handleValue', (req, res) => {
//   const value = req.query.value;
//   console.log(value); // Outputs: "Hello from HTML!"
//   // Do something with the value
//   res.send("Sent Successfully");
// });

app.post('/submit-form', (req, res) => {
    const name = req.body.Name;
    const Regno = req.body.Regno;
    const dept = req.body.dept;
    const password = req.body.password;
    const faculty = req.body.facultyy;
    const student = req.body.studentt 
    console.log(`Username: ${name}, Register number: ${Regno}, Department: ${dept}, Password: ${password}, faculty: ${faculty}, Student: ${student}`);

     for(let i=0; i<results.length; i++){
      if(Regno===results[i].Regno){
        res.sendFile(__dirname + '/Student1.html');
      }
    }
    //res.send('Form submitted successfully!');   

});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
       






const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'Gokul@3005',
  database : 'dummy'
});


connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

connection.query('SELECT * FROM student', function (error, results, fields) {
  if (error) {
    throw error;
  }

  console.log(results);


  if (results.length > 0) {
    console.log('First row name field:', results[0].name);
  }
});

connection.end();
