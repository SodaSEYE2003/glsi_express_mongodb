module.exports = app => {
  const students = require("../controllers/student.controller.js");
  let router = require("express").Router();

  // Create a new Student
  router.post("/", students.create);

  // Retrieve all Student
  router.get("/", students.findAll);

  //Delete a Student with id
  router.delete("/:id", students.delete);

  /*//Delete all Student 
  router.delete("/", students.deleteAll);*/

  app.use("/api/students", router);


};
