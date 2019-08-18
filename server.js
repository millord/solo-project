const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Loading the dotenv file
require("dotenv").config();

// connecting to the database

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("DB working properly!");
  })
  .catch(err => console.log(err));

// Routes

app.get("/api/notes", (req, res) => {
  // Here I fetch the data from the database
  const notes = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Steve", lastName: "Smith" },
    { id: 3, firstName: "Mary", lastName: "Swanson" }
  ];
  res.json(notes);
});

// Creating the port
const port = 5000;

// Starting the server
app.listen(port, () => {
  console.log(`Server running successfully at port ${port}`);
});
