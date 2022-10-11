const express = require("express");
const app = express();
const cors = require("cors");

const toursRoute = require("./router/v1/tours.route");
const { errorHandler } = require("./utils/errorHandler");

// middleware
app.use(express.json());
app.use(cors());
app.use(errorHandler);

//routes
app.use("/api/v1/tours", toursRoute);

module.exports = app;
