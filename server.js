const express = require("express");
const mongoose = require("mongoose");
const routes = require("/.routes");

const app = express();

const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${port}`);
});
