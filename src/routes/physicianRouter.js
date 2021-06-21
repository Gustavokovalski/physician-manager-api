const express = require("express");
const auth = require("../middlewares/auth");
const physicianRouter = express.Router();
const physicianController = require("../controllers/physicianController.js");

physicianRouter.get("/listAllPhysicians", auth, physicianController.listAllPhysicians);
physicianRouter.post("/newPhysician", auth, physicianController.newPhysician);
physicianRouter.put("/updatePhysician",auth, physicianController.updatePhysician);
physicianRouter.delete("/deletePhysician/:id",auth, physicianController.deletePhysician);
physicianRouter.get("/logout", auth, physicianController.logout);

module.exports = physicianRouter;