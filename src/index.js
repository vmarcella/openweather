require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { apiRouter } = require("./routers/index");

// Port and mongoose database connection
const port = 3000;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());

app.use("/api", apiRouter);

app.listen(port, () => console.log("listening!"));
