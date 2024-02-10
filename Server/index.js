import express from 'express';
import routes from './src/routes/test.route.js';

const app = express();

app.use('/', routes);

app.get('/', function (_, res) {
  res.send('hello world');
});

app.listen(3000, function () {
  console.log('🔥 Server is running at port 3000');
});
