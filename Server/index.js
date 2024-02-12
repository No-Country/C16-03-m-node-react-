import express from 'express';
import routes from './src/routes/test.route.js';
import mongoose from 'mongoose';
import config from './src/config/config.js';

const app = express();

mongoose.connect(config.db.mongodbUri).then(function () {
  console.log('connection to database successful!');
  app.use('/', routes);

  app.get('/', function (_, res) {
    res.send('hello world');
  });

  app.listen(3000, function () {
    console.log('🔥 Server is running at port 3000');
  });
});
