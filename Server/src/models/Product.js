import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const ProductSchema = new Schema({
  description: {
    type: String,
    require: true,
  },
  originData: {
    type: String,
    require: true,
  },
  destinationData: {
    type: String,
    require: true,
  },
  packageData: {
    type: Object,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  ownerId: {
    type: String,
    require: true,
  },
});
