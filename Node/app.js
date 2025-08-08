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

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });
//     res.end("hello there!");
// });

// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });




// const http = require("http");

// http.get('http://jsonplaceholder.typicode.com/posts', (res) => {
//     let data = '';
//     res.on('data', (chunk) => {
//         data += chunk;
//     });

//     res.on('end', () => {
//         console.log("Response from server: ");
//         console.log(data);
//     })
// });




// OS Module
// const os = require('os');

// console.log("System Architecture: ", os.arch());
// console.log("Hostname: ", os.hostname());
// console.log("Platform: ", os.platform());
// console.log("System Uptime: ", os.uptime());
// console.log("CPU Information: ", os.cpus());
// console.log("Total Memory: ", os.totalmem());
// console.log("Free Memory: ", os.freemem());




// path module
// const path = require('path');

// join();
// const filePath = path.join('folder1', 'folder2', 'file.txt');
// console.log(filePath);

// resolve()
// const absolutePath = path.resolve('folder1', 'folder2', 'file.txt');
// console.log(absolutePath);

// basename()
// const baseName = path.basename('/folder1/folder2/file.txt');
// console.log(baseName);

// extname()
// const fileExtension = path.extname('file.txt');
// console.log(fileExtension);

// parse()
// const parsedPath = path.parse('/folder1/folder2/file.txt');
// console.log(parsedPath);




// fs module
// const fs = require('fs');

// fs.readFile()
// asynchronous
// fs.readFile('example.txt', 'utf-8', (err, data) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log("File Content: ", data);
// });


// synchronous
// const data = fs.readFileSync('example.txt', 'utf-8');
// console.log(data);




// fs.writeFile('example.txt', 'Hello, this is a new content', (err) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log("File written successfully");
// });



// fs.appendFile()
// fs.appendFile('example.txt', '\nnew appended content', (err) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log("Data appended successfully");
// })


// fs.unlink()





// url module
// https://www.example.com:8080/path/to/resource?name=jay&age=26

// const { URL } = require('url');

// const myUrl = new URL('https://www.example.com:8080/path/to/resource?name=jay&age=26')

// console.log("Protocol:", myUrl.protocol);
// console.log("Hostname:", myUrl.hostname);
// console.log("POrt:", myUrl.port);
// console.log("Pathname:", myUrl.pathname);
// console.log("Search Params:", myUrl.search);

// console.log("Name:", myUrl.searchParams.get("name"));
// console.log("Age:", myUrl.searchParams.get("age"));




// chalk module
// const chalk = require('chalk');      //commonjs doesnt work for chalk v5
// import chalk from 'chalk';

// console.log(chalk.red("This text is red"));
// console.log(chalk.green("This text is green"));
// console.log(chalk.blue("This text is blue"));

// console.log(chalk.bgYellow.black("Yello Background and black text"));



// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     })
//     res.end("Hello there 123");
// });

// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// })




const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Welcome to Home Page");
    } else if(req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("This is about page");
    } else if(req.url === '/data') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        const data = {
            name: "Jay",
            age: 26,
            email: "jay.abhani@almabetter.com"
        }
        res.end(JSON.stringify(data));
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Page Not Found');
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});