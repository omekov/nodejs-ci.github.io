'use strict';

const express = require('express');

const port = 8008;
const host = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send('Hellow World');
});

app.listen(port, host);
console.log(`running on http://${host}:${port}`);