import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const BaseSchema = new Schema({
  name: {
    type: String,
    require: true,
    minlength: 2,
    maxlength: 50,
  },
  address: {
    type: String,
    require: true,
  },
  postalCode: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
  },
  description: {
    type: String,
    require: true,
  },
  products: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Product' 
  }],
});
