const { Hotel } = require('../models/index.js');

// controllers do queries on hotels db
exports.getById = (id) => Hotel.findOne({ id });
