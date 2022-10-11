const Tours = require("../model/Tours.Schema");

module.exports.getAllTourData = async (name, image, page, limit, sort) => {
  const result = await Tours.find({ $or: [{ name: name, image: image }] })
    .skip(+page * +limit)
    .limit(+limit)
    .sort(sort);

  name(image);

  return result;
};
