const express = require("express");
const bodyParser = require("body-parser");

const { apiRouter } = require("./routers/index");

const port = 3000;
const app = express();

app.use(bodyParser.json());

app.use("/api", apiRouter);

app.listen(port, () => console.log("listening!"));
