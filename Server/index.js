import express from 'express';

const app = express();

app.get('/', function (_, res) {
  res.send('hello world');
});

app.listen(3000, function () {
  console.log('🔥 Server is running at port 3000');
});
