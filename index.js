const express = require("express");
const app = express();
const router = require("./src/routes/router");
require("./src/database");
const port = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => {
	console.log("Server is running at localhost: ", port);
});

module.exports = app;
