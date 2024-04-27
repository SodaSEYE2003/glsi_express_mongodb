module.exports = app => {
  const students = require("../controllers/student.controller.js");
  let router = require("express").Router();

  // Create a new Student
  router.post("/", students.create);

  // Retrieve all Student
  router.get("/", students.findAll);

  app.use("/api/students", router);
};
