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
});
