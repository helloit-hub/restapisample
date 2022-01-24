const express = require("express");
const { PORT, mongoURL } = require("./config");
const {
  CREATEDATA,
  GETDATA,
  GETSPECIFICDATA,
  UPDATEDATA,
  DELETEDATA,
} = require("./endpoints");
const {
  createData,
  getAllData,
  singleData,
  updateData,
  deleteData,
} = require("./queryoperations");
const mongoose = require("mongoose");
const app = express();
mongoose.connect(mongoURL);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get(GETDATA, getAllData);
app.get(GETSPECIFICDATA, singleData);
app.post(CREATEDATA, createData);
app.post(UPDATEDATA, updateData);
app.post(DELETEDATA, deleteData);
app.listen(PORT, () => {
  console.log(`Server is listening to port : ${PORT}`);
});
