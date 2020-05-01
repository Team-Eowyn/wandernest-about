const express = require('express');
let app = express();
var {Hotel} = require('../database/index.js');




let port = 3003;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});