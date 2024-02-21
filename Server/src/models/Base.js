import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const BaseSchema = new Schema({
  name: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 30,
  },
  address: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 30,
  },
  postalCode: {
    type: String,
    require: true,
    minlength: 3,
    maxlength: 15,
  },
  city: {
    type: String,
    require: true,
    minlength: 3,
    maxlength: 20,
  },
  phone: {
    type: String,
  },
  description: {
    type: String,
    require: true,
    enum: ['Letter', 'Package'],
    default: null,
    // minlength: 2,
    // maxlength: 50,
  },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
});
