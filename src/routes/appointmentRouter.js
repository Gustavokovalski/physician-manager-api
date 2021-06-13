const express = require("express");
const appointmentRouter = express.Router();
const appointmentController = require("../controllers/appointmentController");

appointmentRouter.post("/newAppointment", appointmentController.newAppointment);
appointmentRouter.delete("/deleteAppointment/:id", appointmentController.deleteAppointment);
appointmentRouter.get("/searchAppointmentByPatientId/:id", appointmentController.searchAppointmentByPatientId);
appointmentRouter.get("/searchAppointmentByPhysicianId/:id", appointmentController.searchAppointmentByPhysicianId,);

module.exports =  appointmentRouter;