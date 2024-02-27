import mongoose from 'mongoose';
import { BaseSchema } from '../models/Base.js';

const Base = mongoose.model('Base', BaseSchema);

function validateUser(req, res, next) {
  const user = req.user;
  if (user.role !== 'userAdmin') {
    return res.status(401).json({ message: 'Insufficient privileges' });
  }
  next();
}

function validateData(req, res, next) {
  const requiredProperties = [
    'name',
    'address',
    'postalCode',
    'city',
    'description',
  ];
  const missingProperties = requiredProperties.filter(
    (prop) => !(prop in req.body),
  );
  if (missingProperties.length > 0) {
    return res.status(400).json({
      message: `Missing properties: ${missingProperties.join(', ')}`,
    });
  }
  next();
}

async function validateBaseId(req, res, next) {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'invalid id' });
  }
  const base = await Base.findById(id);
  if (!base) {
    return res.status(404).json({ message: 'no base founded with id: ' + id });
  }
  next();
}

export default { validateBaseId, validateData, validateUser };
