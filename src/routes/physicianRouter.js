const express = require("express");
const physicianRouter = express.Router();
const physicianController = require("../controllers/physicianController.js");


physicianRouter.get("/listAllPhysicians", physicianController.listAllPhysicians);
physicianRouter.get("/newPhysician", physicianController.newPhysician);
physicianRouter.get("/updatePhysician", physicianController.updatePhysician);
physicianRouter.get("/deletePhysician", physicianController.updatePhysician);



module.exports = physicianRouter;