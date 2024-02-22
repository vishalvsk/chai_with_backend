const express = require("express");
const app = express();

const jokes = [
  { id: 1, name: "Object 1", content: "Content of Object 1" },
  { id: 2, name: "Object 2", content: "Content of Object 2" },
  { id: 3, name: "Object 3", content: "Content of Object 3" },
  { id: 4, name: "Object 4", content: "Content of Object 4" },
  { id: 5, name: "Object 5", content: "Content of Object 5" },
  { id: 6, name: "Object 6", content: "Content of Object 6" },
  { id: 7, name: "Object 7", content: "Content of Object 7" },
  { id: 8, name: "Object 8", content: "Content of Object 8" },
  { id: 9, name: "Object 9", content: "Content of Object 9" },
  { id: 10, name: "Object 10", content: "Content of Object 10" },
];
// app.get("/login", (req, res) => {
//   res.send({ message: "server is on running", id: req.body.id });
// });

app.use(express.json());

app.get("/jokes/:name", (req, res) => {
  const name = req.params.name;
  console.log(name);
  const filterJoke = jokes.filter((joke) => joke.name === name);
  res.json(filterJoke);
  // res.send({ id: req.body });
});

// app.get("/", (req, res) => {
//   res.send("the server is ready");
// });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
