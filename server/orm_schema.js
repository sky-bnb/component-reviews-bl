const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  house_id: Number,
  accuracy: Number,
  communication: Number,
  cleanliness: Number,
  location: Number,
  check_in: Number,
  value: Number,
  reviews: [
    {
      review_id: Number,
      name: String,
      avatar: String,
      review: String,
      date_created: String,
    },
  ],
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = {
  Review,
};
