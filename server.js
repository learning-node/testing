const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

const cap = require('./lib/cap.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res, next) => {
    res.status(200).sendFile(__dirname + '/index.html');
});
app.get('/main.js', (req, res, next) => {
    res.status(200).sendFile(__dirname + '/main.js');
});
app.post('/cap', (req, res, next) => {
    const inputStuff = req.body.stuff;
    const answer = cap(inputStuff);
    res.status(200).send(answer);
});

// Add route to take in a POST to /repeat and return the word repeated.
// Same structure of req.body as above in /cap.

// Add route to take in a POST to /caprepeat and return the string capped and repeated.
// Same structure of req.body as above in /cap.
app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
