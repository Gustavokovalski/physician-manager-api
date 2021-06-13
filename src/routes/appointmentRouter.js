const express = require("express");
const appointmentRouter = express.Router();

appointmentRouter.get("/newAppointment", appointmentController.newAppointment);
appointmentRouter.get("/deleteAppointment", appointmentController.deleteAppointment);
appointmentRouter.get("/searchAppointmentByPatientId", appointmentController.searchAppointmentByPatientId);
appointmentRouter.get("/searchAppointmentByPhysicianId,", appointmentController.searchAppointmentByPhysicianId,);




module.exports =  appointmentRouter;