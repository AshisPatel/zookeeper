const express = require('express');


// Instantiate the server

const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes'); 

app.use(express.static('public')); 

// parse incoming string or array data

app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data

app.use(express.json());

app.use('/api', apiRoutes); 
app.use('/', htmlRoutes); 

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});