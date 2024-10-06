const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to EJS for templating
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
    res.render('index');
});

// Start server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});