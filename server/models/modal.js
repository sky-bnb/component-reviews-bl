const mongoose = require('mongoose');
const { Review } = require('../orm_schema');

mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB connected');
});

const getHouse = (id) => {
  return Review.find({ house_id: id })
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log(err, 'error');
    });
}

module.exports = {
  getHouse
}