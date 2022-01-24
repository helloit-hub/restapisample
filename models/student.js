const mongoose = require("mongoose");
const subject = new mongoose.Schema({
  type: Array,
  _id: false,
});
const Students = new mongoose.Schema({
  date: { type: Number, default: Date.now() },
  name: { type: String, required: true },
  group: { type: String, required: true },
  subjects: { type: Array, subject },
  contact: { type: Number, required: true },
  address: { type: String, required: true },
});

const model = mongoose.model("studentsRecords", Students);
module.exports = model;
