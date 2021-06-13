const express = require("express");
const app = express();
require("./src/database")
const port = process.env.SYSTEM_PORT;
const router = require("./src/routes/router");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.listen(port, () => {
	console.log("Server is running at localhost:", port);
});

module.exports = app;