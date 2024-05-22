const express = require('express');
const morgan = require('morgan');
const fs = require('fs');

const app = express()

app.use(morgan('tiny'));
app.use(express.static('static'));

app.get('/', (req, res) => {
    res.send('Hello fellow developer')


const fileNameOfUrl = url => {
    let fileName = '';
    if(req.url.split('/')[1] === '') {
        fileName = 'index.html'
    }else{
        fileName = req.url.split('/')
    }
    return fileName
}

const filename = fileNameOfUrl(req.url);

const fileContentOr404 = (filename) => {
    if(!fs.existsSync(`static/${filename}`)){
        filename = '404.html';
    }

    return fs.readFileSync(`static/${filename}`)
}
});

const port = 3000
app.listen((port), () => {
    console.log(`server is running on port ${port}`);
})