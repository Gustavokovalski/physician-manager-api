const express = require("express");
const patientRouter = express.Router();
const patientController = require("../controllers/patientController");

patientRouter.post("/newPatient", patientController.newPatient);
patientRouter.post("/searchPatientByName", patientController.searchPatientByName);
patientRouter.get("/searchPatientByPhysicianId/:id", patientController.searchPatientByPhysicianId);
patientRouter.put("/updatePatient", patientController.updatePatient);

module.exports = patientRouter;