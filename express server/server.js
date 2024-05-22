const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const dev = {
        id: 1,
        name: "Jelena",
        email: "yelli@gmail"
    }
    res
    .status(201)
    .setHeader('location', 'api/developers/1')
    .json(dev)
});

const port = 3000;

app.listen(port, () => {
    console.log(`app is listening to the port ${port}`);
})