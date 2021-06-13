const express = require("express");
const patientRouter = express.Router();
const patientController = require("../controllers/patientController");

patientRouter.get("/searchPatientByName", patientController.searchPatientByName);
patientRouter.get("/newPatient", patientController.newPatient);
patientRouter.get("/updatePatient", patientController.updatePatient);

module.exports = patientRouter;