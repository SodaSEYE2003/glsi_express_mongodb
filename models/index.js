const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");

/*const express = require("express");
const app = express();
require("../routes/student.routes.js")(app);*/
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.url = dbConfig.url;

db.students = require("./student.model.js")(mongoose);

module.exports = db;
