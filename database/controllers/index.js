const {Hotel} = require('../models/index.js');

//controllers do queries on hotels db
exports.getById = (id) => {
  return Hotel.findOne({id});
};