const express = require("express");
const {
  getAllTours,
  createTours,
} = require("../../controllers/tours.controller");
const router = express.Router();

router.route("/").get(getAllTours).post(createTours);

router.route("/:id").get().patch();

router.route("/trending").get();

router.route("/cheapest").get();

module.exports = router;
