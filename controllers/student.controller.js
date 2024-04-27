const db = require("../models");
const Student = db.students;

//Create and Save a new Student 
exports.create = (req, res)=>{
    //Validate request 
 if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!"});
    return;
 }
 //Create a student 
 const student = new Student({
        name: req.body.name,
      course: req.body.course,
      registered: req.body.registered ? req.body.registered : false,
 });
 //Save Student in the database
 student
    .save(student)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occured while retrieving students.",
        });
    });
};

 //Retrieve all Students from th database
exports.findAll = (req, res)=>{
    const name = req.body.name;
    let condition  =name
        ? { name: {$regex: new RegExp(name), $options: "i"} }
        : {};
    Student.find(condition)
    .then(data =>{
        res.send(data);
     })
     .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occured while retrieving students.",
        });
    });
};