const mongoose = require('mongoose');
// set up these options to avoid deprecation warnings
mongoose.connect('mongodb://localhost/about', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const { Schema } = mongoose;
const { model } = mongoose;

const hotelSchema = Schema({
  id: {
    type: Number,
    unique: true
  },
  name: String,
  description: String,
  averageReview: Number,
  numReviews: Number,
  class: Number,
  link: String,
  propertyAmenities: [{
    type: String
    // ,icon: String
    // unsure if store icons in db, or later link to them through css like tripadvisor does
  }],
  roomFeatures: [{
    type: String
  }],
  roomTypes: [{
    type: String
  }],
  photos: [{
    type: String
  }]
  // photos: [{
  //   //use Array not ObjectId
  //   type: Schema.Types.Array,
  //   ref: 'Photo'  //Model
  // }]
});

// var Photo = model('Photo',
//   Schema ({
//     link: String
//   })
// );

const Hotel = model('Hotel', hotelSchema);

module.exports = { Hotel }; // export mongoose.connection?
