const express = require('express');
const morgan = require('morgan');
const app = express()


app.use(express.static('static'));

app.get('/', (req, res) => {
    res.send('Hello fellow developer')
});

const port = 3000
app.listen((port), () => {
    console.log(`server is running on port ${port}`);
})