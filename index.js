console.log("hello world");

let array = [100,200,300];
let filteredData = array.map(num => num < 100);
console.log(filteredData);
function greet(name) {
console.log(`hello mr ${name}`)
}

greet("omar");

let a = 10;
let b = 20;
console.log(a + b);

console.log('Hey whatsApp');
console.log("new update");

console.log('is bedel cusub');

console.log('hey omar');


const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
// get method
app.get('/',(req,res) => {
    res.send("Hello from express");
})

app.get('/admin',(req,res)=> {
    res.send("hello from dugsiiye");
})

// post method

app.post("/users",(req, res) => {
    const userData = req.body;
    res.send(`user created with email: ${userData.email}`)
})

// put method

app.put('/users/:id', (req,res) => {
    const userId = req.params.id;
    const userData = req.body;
    res.send(`User ${userId} updated with name: ${userData.name}`)
})

// delete method

app.delete('/users/:id', (req,res)=> {
    const userId = req.params.id;
    res.send(`User ${userId} deletd successfully`);
})
app.listen(port, ()=> {
    console.log(`server is running on http://localhost:${port}`);
})