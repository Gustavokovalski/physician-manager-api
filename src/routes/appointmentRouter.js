const express = require("express");
const auth = require("../middlewares/auth");
const appointmentRouter = express.Router();
const appointmentController = require("../controllers/appointmentController");

appointmentRouter.post("/newAppointment", auth, appointmentController.newAppointment);
appointmentRouter.delete("/deleteAppointment/:id", auth, appointmentController.deleteAppointment);
appointmentRouter.get("/searchAppointmentByPatientId/:id", appointmentController.searchAppointmentByPatientId);
appointmentRouter.get("/searchAppointmentByPhysicianId/:id", auth, appointmentController.searchAppointmentByPhysicianId,);

module.exports =  appointmentRouter;