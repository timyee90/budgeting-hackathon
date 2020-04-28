const express = require('express');
const parser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const app = express();
const router = require('./router.js');

app.use(parser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use('/api', router);

let port = 4000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
