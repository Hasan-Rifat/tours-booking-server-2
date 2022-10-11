const Tours = require("../model/Tours.Schema");
const { getAllTourData } = require("../services/tours.services");

module.exports.getAllTours = async (req, res, next) => {
  try {
    const { name, image, page, limit, sort } = req.query;
    const result = await getAllTourData(name, image, page, limit, sort);
    res.status(200).json({
      data: result,
      status: "success",
      message: "get all tours",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      status: "failed",
      message: "can't get data from server error",
    });
  }
};
module.exports.createTours = async (req, res, next) => {
  try {
    const result = await Tours.create(req.body);
    res.status(200).json({
      data: result,
      status: "success",
      message: "tour created successfully",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      status: "failed",
      message: "can't created tour error",
    });
  }
};
