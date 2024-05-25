const express = require('express');

const app = express();

const db = [
    {
        id: 1,
        name: "Jelena",
        email: "yelli@gmail"
    },
    {
        id: 2,
        name: "Linus",
        email: "linus@gmail.com"
    }
]
app.get('/api/developers', (req, res) => {
    res
    .status(200)
    .json(db)
});

app.get('/api/developers/:id', (req, res) => {
    console.log(`The db contains ${db.length} objects`);
 

    for(let i = 0; i < db.length; i++){
        console.log(db[i].id);
        if(db[i].id == req.params.id){
            console.log('a match is found');
            res.json(db[i]);
            return;
        }
       
    }
   
    res.status(404).end();
});

app.get('/api/developers/:id/:name/:address', (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    const address = req.params.address;
    console.log(id, name, address);
    console.log(req.params.id);
})
const port = 3000;



app.listen(port, () => {
    console.log(`app is listening to the port ${port}`);
})