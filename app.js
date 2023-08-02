const express = require('express');
const app = express();
const port = 3000;
const sumFunction = require('./sumFunction');
const countWordInFile = require('./countWordInTextFile');


// routes
app.get('/', (req, res) => res.send('Hello World!!'));
app.get('/sum', sumFunction); // for sum of array
app.get('/countWord', countWordInFile); // for read file asynchronusly

app.listen(port,() => console.log(`Listening on port ${port}!!`));