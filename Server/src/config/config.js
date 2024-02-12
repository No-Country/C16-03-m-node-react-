import dotenv from 'dotenv';
dotenv.config();

const { MONGODB_URI, PORT } = process.env;

const config = {
  db: {
    mongodbUri: MONGODB_URI,
  },
  app: {
    port: PORT || 3000,
  },
};

export default config;
