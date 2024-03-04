import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const ProductSchema = new Schema({
  description: {
    type: String,
    require: true,
    enum: ['Letter', 'Package'],
    default: null,
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
    type: {
      weightKg: {
        type: Number,
        require: false,
        default: null,
      },
      heightCm: {
        type: Number,
        require: false,
        default: null,
      },
      widthCm: {
        type: Number,
        require: false,
        default: null,
      },
      lengthCm: {
        type: Number,
        require: false,
        default: null,
      },
    },
    require: true,
  },
  status: {
    type: String,
    require: true,
    enum: [
      'Canceled',
      'In Warehouse',
      'In Progress',
      'In Transit',
      'Delivered',
    ],
    default: null,
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  sentAt: {
    type: Date,
    require: false,
    default: null,
  },
  receivedAt: {
    type: Date,
    require: false,
    default: null,
  },
  price: {
    type: Number,
    require: true,
    default: null,
    min: 0,
  },
});
