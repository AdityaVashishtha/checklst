const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("HELLO BABY");
});

app.listen(PORT, () => {
    console.log(`Started listeing on ${PORT}`);
});