const express = require("express");
const app = express();

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
