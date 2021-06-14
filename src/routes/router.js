const express = require("express");
const patientRouter = require("./patientRouter");
const physicianRouter = require("./physicianRouter");
const appointmentsRouter = require("./appointmentRouter");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Working!");
});

router.use("/patient", patientRouter);
router.use("/physician", physicianRouter);
router.use("/appointments", appointmentsRouter);

module.exports = router;