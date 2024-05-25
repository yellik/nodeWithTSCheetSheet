const express = require('express');

const app = express();

app.use(express.json())
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

app.post('/api/developers', (req, res) => {
    console.log(req.body);
    res.status(201).end()
})
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
    db.find((id) => dev.id == req.params.id )
   return dev ? res.json(dev) : res.status(404).end()
})
const port = 3000;



app.listen(port, () => {
    console.log(`app is listening to the port ${port}`);
})