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

const fileName = fileNameOfUrl(req.url);

const fileContentOr404 = (fileName) => {
    if(!fs.existsSync(`static/${fileName}`)){
        fileName = '404.html';
    }

    return fs.readFileSync(`static/${fileName}`)
}
const content = fileContentOr404(fileName)
res.end(content)
});

const port = 3000
app.listen((port), () => {
    console.log(`server is running on port ${port}`);
})