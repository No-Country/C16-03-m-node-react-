import express from 'express';
import routes from './src/routes/test.route.js';
import mongoose from 'mongoose';
import config from './src/config/config.js';
import authRoutes from './src/routes/auth.routes.js';
import productRoutes from './src/routes/product.route.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(config.db.mongodbUri).then(function () {
  console.log('connection to database successful!');
  app.use('/', routes);
  app.get('/', function (_, res) {
    res.send('hello world');
  });

  app.use('/auth', authRoutes);
  app.use('/product', productRoutes);
  app.listen(3000, function () {
    console.log('🔥 Server is running at port 3000');
  });
});
