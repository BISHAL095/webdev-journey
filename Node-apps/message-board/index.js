const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// Get route
app.get("/", (req, res) => {
  res.render("home", { messages });
});

app.get("/new", (req, res) => {
  res.render("form");
});

//Post route
app.post("/new", (req, res) => {
  const { user, text } = req.body;

  messages.push({
    user,
    text,
    added: new Date()
  });

  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});