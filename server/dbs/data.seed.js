const mongoose = require('mongoose');
const faker = require('faker');
const { Review } = require('../orm_schema');

mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB connected');
  // NO NEED TO DROP THE DB BECAUSE IT WILL RESET THE DATA EVERY TIME THE SCRIPT IS RAN
  // db.dropDatabase();

  const randomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const promise = [];
  for (let i = 1; i <= 200; i += 1) {
    const houseObj = {
      house_id: i,
      accuracy: randomNum(20, 50),
      communication: randomNum(20, 50),
      cleanliness: randomNum(20, 50),
      location: randomNum(20, 50),
      check_in: randomNum(20, 50),
      value: randomNum(20, 50),
      reviews: [],
    };

    const randomReview = () => {
      for (let j = 0; j < randomNum(15, 125); j += 1) {
        const reviewObj = {
          review_id: j,
          name: faker.name.findName(),
          avatar: faker.image.avatar(),
          review: faker.lorem.sentences(randomNum(3, 7)),
          date_created: faker.date.past(2),
        };
        houseObj.reviews.push(reviewObj);
      }
    };

    randomReview();
    const review = new Review(houseObj);
    promise.push(review);
    review.save();
  }

  Promise.resolve(promise)
    .then(() => {
      console.log('Data sucessfully seeded!!');
      db.close();
      console.log('Connection closed');
    })
    .catch((err) => {
      console.log(err, 'error');
    });
});
