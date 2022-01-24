const main = `/api/student`; // Change Endpoint
const GETDATA = main;
const GETSPECIFICDATA = `${main}/:id`;
const CREATEDATA = `${main}/create`;
const DELETEDATA = `${main}/delete/:id`;
const UPDATEDATA = `${main}/update/:id`;
module.exports = {
  GETDATA,
  GETSPECIFICDATA,
  CREATEDATA,
  DELETEDATA,
  UPDATEDATA,
};
