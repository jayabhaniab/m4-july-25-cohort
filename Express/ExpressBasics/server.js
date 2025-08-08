// import express module
const express = require('express');

// create an instance of express app
const app = express();

// define a route root url (/)
// app.get('/', (req, res) => {
//     res.send("Hello World!");
// });

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1><p>Welcome to my App!</p>");
})

app.get('/json', (req, res) => {
    res.json({message: "Hello World", status: "Success!"});
})

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`user ID: ${userId}`);
});

app.get('/search', (req, res) => {
    const keyword = req.query.keyword;
    if(keyword) {
        res.send(`Search results for: ${keyword}`);
    } else {
        res.send("Please provide a search keyword");
    }
})

// GET
app.get('/about', (req, res) => {
    res.send("<h1>About Us</h1><p>This is about page</p>");
});

// POST
app.post("/submit", (req, res) => {
    res.send("Form submitted successfully");
})

// PUT
app.put('/update', (req, res) => {
    res.send("Data updated successfully");
})

// DELETE
app.delete('/delete', (req, res) => {
    res.send("Data deleted successfully!");
})

// start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});