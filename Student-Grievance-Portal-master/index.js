const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let complaints = [];

app.get("/", (req, res) => {
    res.render("index", { complaints });
});

app.post("/submit", (req, res) => {
    const { name, grievance } = req.body;
    complaints.push({ name, grievance });
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");

});
app.post("/submit", (req, res) => {
    const { name, hallticket, group, year, grievance } = req.body;
    complaints.push({ name, hallticket, group, year, grievance });
    res.redirect("/");
});
