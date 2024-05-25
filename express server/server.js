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
    const newDeveloper = {
        id: db.length + 1,
        name: req.body.name,
        email: req.body.email
    }
    db.push(newDeveloper);

    res.status(201)
    .setHeader('location', `/api/developers/${newDeveloper.id}`)
    .json(newDeveloper)

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



app.delete('/api/developers/:id', (req, res) => {
    console.log(req.params.id);
    const devIndex = db.findIndex(dev => dev.id == req.params.id)
    
    console.log(devIndex);
    if(devIndex  !== -1) {
        db.splice(devIndex, 1);
        res.status(204).end()
        return
    }
    res.status(404).json({ error: `developer with the id ${id} not found` })
})

app.patch('/api/developers/:id', (req, res) => {
    const dev = db.find(dev => dev.id == req.params.id);

   if(dev) {
   
    if(req.body.name) dev.name = req.body.name;
    if(req.body.email) dev.email = req.body.email;
    
    res.status(200)
    res.json({message: 'dev successfully updated', developer: dev})
}else{
    res.status(404).json({ error: `developer with the id ${req.params.id} not found`})

}

})
app.get('/api/developers/:id/:name/:address', (req, res) => {
    db.find((id) => dev.id == req.params.id )
   return dev ? res.json(dev) : res.status(404).end()
})
const port = 3000;



app.listen(port, () => {
    console.log(`app is listening to the port ${port}`);
})