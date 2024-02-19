import dotenv from 'dotenv';
dotenv.config();

const { MONGODB_URI, PORT, JWT_SECRET } = process.env;

const config = {
  db: {
    mongodbUri: MONGODB_URI,
  },
  app: {
    port: PORT || 3000,
    secretKey: JWT_SECRET,
  },
};

export default config;
