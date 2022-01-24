const model = require("./models/student");
const Student = require("./models/studobj");

const getAllData = async (req, res) => {
  const data = await model.find({});
  res.json(data);
};

const createData = async (req, res) => {
  const stud = new Student(
    req.body.name,
    req.body.group,
    req.body.subjects,
    req.body.contact,
    req.body.address
  );
  try {
    const response = await model.create(stud);
    console.log(response);
    res.json({ status: "Successful", message: "ID Successfully Created" });
  } catch (err) {
    res.send("Something Went Wrong");
  }
};

const singleData = async (req, res) => {
  try {
    const data = await model.findById({ _id: req.params.id });
    res.json(data);
  } catch (err) {
    res.sendStatus(404);
  }
};

const updateData = async (req, res) => {
  try {
    const updateStudent = new Student(
      req.body.name,
      req.body.group,
      req.body.subjects,
      req.body.contact,
      req.body.address
    );
    const data = await model.updateOne(
      { _id: req.params.id },
      {
        $set: updateStudent.getStudentObj(),
      }
    );
    res.json({ status: "Successful", message: "ID Successfully Updated" });
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async (req, res) => {
  try {
    const data = await model.deleteOne({ _id: req.params.id });
    res.json({ status: "Successful", message: "ID Successfully Deleted" });
  } catch (err) {
    console.log(err);
    res.send("Something Went Wrong");
  }
};
module.exports = { getAllData, createData, singleData, updateData, deleteData };
