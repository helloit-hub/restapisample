class Student {
  constructor(studentName, group, subjects, contact, address) {
    (this.name = studentName),
      (this.group = group),
      (this.subjects = subjects),
      (this.contact = contact),
      (this.address = address);
  }
  getStudentObj() {
    return this;
  }
}
module.exports = Student;
