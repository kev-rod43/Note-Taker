const routes = require('express').Router();

const htmlRoutes = require("./html");
const apiRoutes = require("./api");

routes.use("/", htmlRoutes);
routes.use("/api", apiRoutes);

module.exports = routes;