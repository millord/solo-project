const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Creating the Note Schema

const NoteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("notes", NoteSchema);
