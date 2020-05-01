const express = require('express');
let app = express();
var {Hotel} = require('../database/index.js');

//later serve up client files using express.static

//import parsers:
//alternative:




let port = 3003;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});