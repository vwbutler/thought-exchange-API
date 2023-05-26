const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// const dbUri = "mongodb://localhost:27017/social_network_db"; // Replace with your MongoDB connection URI
// mongoose
//   .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Failed to connect to MongoDB", err);
//   });

// // Import route files
// const thoughtsRoutes = require('./routes/thoughts');
// // Import other route files as needed

// // Use routes
// app.use('/thoughts', thoughtsRoutes);
// // Use other routes as needed
