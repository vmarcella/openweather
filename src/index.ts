import express from "express";
import weather from "openweather-apis";

const port = 3000;
const app = express();
app.listen(port, () => {
  console.log("Server starting");
});
