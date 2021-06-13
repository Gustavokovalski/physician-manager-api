const Sequelize = require("sequelize");
const dbConfig = require ("./config/dbconfig");

const Patient = require("../models/Patient.js");
const Physician = require("../models/Physician.js");
const Appointment = require("../models/Appointment.js");

const connection = new Sequelize(dbConfig);

Patient.init(connection);
Physician.init(connection);
Appointment.init(connection);

Appointment.associate(connection.models);
//Patient.associate(connection.models);
//Physician.associate(connection.models);

module.exports = connection;