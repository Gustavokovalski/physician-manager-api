const express = require("express");
const patientRouter = require("./patientRouter");
const physicianRouter = require("./physicianRouter");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Working!");
});

router.use("/patient", patientRouter);
router.use("/physician", physicianRouter);

module.exports = router;