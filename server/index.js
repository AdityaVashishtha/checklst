const express = require("express");
const app = express();
const bodyParser = require('body-parser')
var cors = require('cors');

const routes = require("./routes");
const initSetup = require("./setup");
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use("/api/v1/", routes);

app.listen(PORT, () => {
    console.log(`Started listeing on ${PORT}`);
});

initSetup.init();