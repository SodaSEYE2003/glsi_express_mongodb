module.exports = app => {
  const students = require("../controllers/student.controller.js");
  let router = require("express").Router();

  // Create a new Student
  router.post("/", students.create);

  // Retrieve all Student
  router.get("/", students.findAll);

  //Delete a Student with id
  router.delete("/:id", students.delete);

  //Delete all Student 
  router.delete("/", students.deleteAll);

  /*// Retrieve all registered Students
  router.get("/registered", students.findAllRegistered);


  // Retrieve a single Student with id
  router.get("/:id", students.findOne);*/


  // Update a Student with id
 // router.put("/:id", students.update);

  app.use("/api/students", router);


};
