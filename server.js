const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// use ejs view engine
app.set('view engine', 'ejs');


// ------ Third-party Middleware
// layout ejs
app.use(expressLayouts);

// Build-in Middleware
// website asset
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('index', {
        title: 'AirMusic',
        layout: 'layouts/main-layout'
    });
});

app.get('/marketplace', (req, res) => {
    res.render('index', {
        title: 'AirMusic',
        layout: 'layouts/main-layout'
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});