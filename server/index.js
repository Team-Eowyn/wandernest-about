const express = require('express');
// const bodyParser = require('body-parser');

const app = express();
// const { Hotel } = require('../database/models/index.js');
const controller = require('../database/controllers/index.js');

// later serve up client files using express.static

// middleware:
// parse incoming request bodies before handlers (so they're not empty):
// app.use(bodyParser.join());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(express.join());

// app.get('/about/hotels', )

app.get('/about/:id', (req, res) => {
  controller.getById(req.params.id)
    .then((hotel) => {
      res.send(hotel);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
});


const port = 3003;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
