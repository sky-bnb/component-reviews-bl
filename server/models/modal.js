const mongoose = require('mongoose');
const { Review } = require('../orm_schema');

mongoose.connect('mongodb://172.17.0.2/reviews', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB connected');
});

const getHouse = id => Review.find({ house_id: id })
  .then(data => data)
  .catch((err) => {
    console.log(err, 'error');
  });

module.exports = {
  getHouse,
};
