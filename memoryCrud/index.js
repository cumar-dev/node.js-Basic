const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let users = [
  { id: 1, name: "Ayaan" },
  { id: 2, name: "Fatima" },
  { id: 3, name: "Zubeyr" },
];

// get all
app.get("/users", (req, res) => {
  res.json(users);
});

// post one user info
app.post("/users", (req, res) => {
  const userData = req.body;

  const newUser = {
    id: users.length + 1,
    name: userData.name,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// get only one user data

app.get("/users/:id", (req, res) => {
  // making search
  const user = users.find((u) => u.id == req.params.id);
  if (!user) {
    return res.status(404).send("user not found");
  }
  res.json(user);
  res.status(200).send("ok");
});

// put

app.put("/users/:id", (req, res) => {
  const userUpdating = users.find((user) => user.id == req.params.id);
  if (!userUpdating) return res.status(404).send("user not found");
  userUpdating.name = req.body.name;
  res.json(userUpdating).send("user updated successfully");
});

// delete

app.delete("/users/:id", (req, res) => {
  const userDeleting = users.filter((user) => user.id != req.params.id);
  if (!userDeleting) {
    return res.status(404).send("user not found");
  }
  res.send("user deleted successfully");
});
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
