import express from "express";
import { faker } from "@faker-js/faker";

const app = express();

app.get("/api/users", (req, res) => {
  const users = Array(1000)
    .fill(0)
    .map((_, i) => ({
      id: i,
      name: faker.person.fullName(),
    }));
  if (req.query.search) {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(req.query.search.toLowerCase())
    );
    res.send(filteredUsers);
    return;
  }
  setTimeout(() => {
    res.send(users);
  }, 1000);
});

const port = process.env.Port || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
