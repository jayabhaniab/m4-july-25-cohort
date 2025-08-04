// const greet = require('./greet');

// console.log(greet("Rahul"))




// const ops = require('./math');

// const res = opsArr[2](5, 3);
// console.log(res);

// const res = ops.subtract(5, 3);
// const res = ops.PI;
// console.log(res);




// http module
// to create an http server
// to make http requests

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end("hello there!");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});