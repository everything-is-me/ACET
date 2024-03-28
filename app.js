const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));

// Route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route to handle the form submission
app.post('/submit-form', (req, res) => {
    const name = req.body.Name;
    const mobile = req.body.mobile;

    console.log(`Username: ${name}, Mobile: ${mobile}`);

    // Redirect back to the form or to a new page
    res.send('Form submitted successfully!');
    

});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});



// Import the mysql module
const mysql = require('mysql');

// Create a connection object
const connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : 'Gokul@3005',
  database : 'dummy'
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

// Query the database
connection.query('SELECT * FROM student', function (error, results, fields) {
  if (error) {
    throw error;
  }

  // results is an array with row objects
  console.log(results);

  // Example: Accessing a specific field from the first row
  if (results.length > 0) {
    console.log('First row name field:', results[0].name);
  }
});

// Close the connection
connection.end();





