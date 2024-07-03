const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;
app.use(express.urlencoded({ extended: false }));
app.get("/users", (req, res) => {
  const html = `<ul> ${users
    .map((user) => `<li>${user.first_name}</li>`)
    .join("")} </ul>`;
  res.send(html);
});
app.get("/api/users", (req, res) => {
  return res.json(users);
});
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...body };
      fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ status: "error", message: "Failed to update user." });
        }
        return res.json({
          status: "success",
          message: "User updated successfully.",
        });
      });
    } else {
      return res
        .status(404)
        .json({ status: "error", message: "User not found." });
    }
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ status: "error", message: "Failed to delete user." });
        }
        return res.json({
          status: "success",
          message: "User deleted successfully.",
        });
      });
    } else {
      return res
        .status(404)
        .json({ status: "error", message: "User not found." });
    }
  });
app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length });
  });
});
app.listen(PORT, () => console.log(`server started at port: ${PORT}.`));
