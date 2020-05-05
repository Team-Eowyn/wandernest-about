const faker = require('faker');
const { Hotel } = require('./models/index.js');

// script for dowloading 100 images: now all moved to AWS
// const download = require('image-downloader');
// const path = require('path');
// const fs = require('fs');
// const dirPath = path.join(__dirname, '/images');
// fs.mkdirSync(dirPath);
// var downloadMockImages = () => {
//   for (var i = 1; i <= 100; i++) {
//     const options = {
//       url: `https://i.picsum.photos/id/${i}/400/300.jpg`,
//       dest: `${dirPath}/${i}.jpg`
//     };

//     download.image(options)
//       .then(({ filename, image }) => {
//         console.log('Saved to', filename)
//       })
//       .catch((err) => console.error(err))
//   }
// };
// downloadMockImages();


const hotelPropertyAmenities = [ // 20 --> pick 10
  'Free parking',
  'Free High Speed Internet (WiFi)',
  'Pool',
  'Fitness Center with Gym / Workout Room',
  'Bar / lounge',
  'Bicycle rental',
  'Children Activities (Kid / Family Friendly)',
  'Business Center with Internet Access',
  'Parking',
  'Wifi',
  'Complimentary instant cofffee',
  'Poolside bar',
  'Rooftop bar',
  'Baggage storage',
  'Concierge',
  'Non-smoking hotel',
  'Sun terrace',
  'Private check-in / check-out',
  'Dry cleaning',
  'Laundry service'
];

const hotelRoomFeatures = [ // 10 --> pick 5
  'Air conditioning',
  'Housekeeping',
  'Private balcony',
  'Safe',
  'Sofa',
  'Minibar',
  'Refrigerator',
  'Flatscreen TV',
  'Laptop safe',
  'Wake-up service / alarm clock'
];

const hotelRoomTypes = [ // 4 --> pick 2
  'Non-smoking rooms',
  'Suites',
  'Ocean view',
  'Family rooms'
];

// faker.seed(123);

const pick = (category, num) => { // could be refactored to be more efficient
  const picked = [];
  while (picked.length < num) {
    const i = Math.floor(Math.random() * category.length);
    if (!picked.includes(category[i])) {
      picked.push(category[i]);
    }
  }
  return picked;
};

const pickPhotos = () => {
  const photos = [];
  const picked = [];
  const imgURL = 'https://wandernest-about.s3.us-east-2.amazonaws.com/';
  while (picked.length < 5) {
    const i = Math.ceil(Math.random() * 100);
    if (!picked.includes(i)) {
      picked.push(i);
      photos.push(`${imgURL}${i}.jpg`);
    }
  }
  return photos;
};

const seed = () => {
  for (let i = 1; i <= 100; i++) {
    const amenities = pick(hotelPropertyAmenities, 10);
    const features = pick(hotelRoomFeatures, 5);
    const types = pick(hotelRoomTypes, 2);
    const photos = pickPhotos();

    const newHotel = new Hotel({
      id: i,
      name: faker.company.companyName(),
      description: faker.lorem.paragraph(),
      averageReview: (Math.random() * 5).toFixed(1),
      numReviews: Math.floor(Math.random() * 2500),
      class: Math.ceil(Math.random() * 5),
      link: faker.internet.url(),
      propertyAmenities: amenities,
      roomFeatures: features,
      roomTypes: types,
      photos
    });
    // mongodb save is deprecated, but use for now. return Promise if no cb
    newHotel.save((err, newHotel) => {
      if (err) {
        console.log(err);
        console.log(`Hotel #${newHotel.id} was not saved!`);
      } else {
        console.log(`Hotel #${newHotel.id} created successfully`);
      }
    });
  }
};


seed();
