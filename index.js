const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(`the url for the request was ${req.url}`);
    console.log(`The Method for the request was '${req.method}'`);

    const content = fs.readFileSync('./static/index.html')

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end(content);
});

const hostname = 'localhost'
const port = 3000;

server.listen(port, hostname, () => {
     console.log(`server running at http://${hostname}`);
     
})