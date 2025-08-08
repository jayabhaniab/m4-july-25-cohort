// import express
const express = require("express");

// instance of express
const app = express();

app.use(express.json());

// create an empty array for users
const users = [];
// {
//     id: 1,
//     name: "Jay",
//     email: "jay@email.com"
// }

// create a new user
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    }
    users.push(newUser);
    res.status(201).json(newUser);
});

// get all users
app.get('/users', (req, res) => {
    res.json(users);
})

// get a user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(user) {
        res.json(user);
    } else {
        res.status(404).json({message: "User not found"});
    }
})

// update a user by ID
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(user) {
        user.name = req.body.name;
        user.email = req.body.email;
        res.json(user);
    } else {
        res.status(404).json({message: "User not found"});
    }
})


// delete a user by ID
app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if(userIndex !== -1) {
        users.splice(userIndex, 1);
        res.json({message: "User deleted successfully"});
    } else {
        res.status(404).json({message: "User not found"});
    }
})

// listen on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})