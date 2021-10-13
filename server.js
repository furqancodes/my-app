const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));

app.get("/api/ping", function (req, res) {
    return res.send("pong");
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "public/index.html"));
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Example app listening at http://localhost:8080`);
});
