const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
let users = [
  {
    id: 1,
    name: "Ayaan Mohamed",
    email: "ayaan@gmail.com",
    age: 22
  },
  {
    id: 2,
    name: "Fatima Ali",
    email: "fatima@gmail.com",
    age: 25
  },
  {
    id: 3,
    name: "Zubeyr Hassan",
    email: "zubeyr@gmail.com",
    age: 28
  },
  {
    id: 4,
    name: "Khalid Abdi",
    email: "khalid@gmail.com",
    age: 21
  },
  {
    id: 5,
    name: "Hodan Yusuf",
    email: "hodan@gmail.com",
    age: 24
  },
  {
    id: 6,
    name: "Abdirahman Noor",
    email: "abdi@gmail.com",
    age: 30
  },
  {
    id: 7,
    name: "Sahra Omar",
    email: "sahra@gmail.com",
    age: 23
  },
  {
    id: 8,
    name: "Mohamed Ahmed",
    email: "mohamed@gmail.com",
    age: 27
  },
  {
    id: 9,
    name: "Leyla Farah",
    email: "leyla@gmail.com",
    age: 26
  },
  {
    id: 10,
    name: "Ismail Ibrahim",
    email: "ismail@gmail.com",
    age: 29
  }
];
app.get("/users", (req,res)=> {
  res.json(users);
})

app.post("/users", (req, res)=> {
  const usersData = req.body;
  if (!usersData.name || !usersData.email || !usersData.age) {
    return res.status(400).send("Please provide name, email, and age");
  }
  const newUser = {
    id: users.length + 1,
    name: usersData.name,
    email: usersData.email,
    age: usersData.age
  }
  users.push(newUser);
 res.status(201).json(newUser);
})

app.put("/users/:id", (req, res) => {
  const user = users.find(user => user.id == req.params.id);
  if(!user) {
    return res.status(404).send("user data is needed");
  }
  user.name = req.body.name;
  user.email = req.body.email;
  user.age = req.body.age;
  res.json(user);
  // const { name, email, age } = req.body;

  // // optional validation
  // if (!name || !email || !age) {
  //   return res.status(400).send("Please provide name, email, and age");
  // }

  // user.name = name;
  // user.email = email;
  // user.age = age;

  
})

app.delete("/users/:id", (req, res) => {
  users = users.filter(user => user.id != req.params.id);
  res.send("User deleted successfully");
});

app.get("/users/:id",(req,res)=> {
  const currentUser = users.find(user => user.id == req.params.id);
  if(!currentUser) {
    return res.status(404).send("user you need not get");
  }
  res.json(currentUser);
})
app.listen(port,()=> {
  console.log(`server is running on http://localhost:${port}`);
})