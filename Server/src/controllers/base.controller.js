import mongoose from 'mongoose';
import { BaseSchema } from '../models/Base.js';

const Base = mongoose.model('Base', BaseSchema);

async function create(req, res) {
  try {
    const base = new Base({
      ...req.body,
    });
    await base.save();
    res.status(200).json(base);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function edit(req, res) {
  const { id } = req.params;
  try {
    const editedBase = await Base.findByIdAndUpdate(
      id,
      { ...req.body },
      { runValidators: true, returnDocument: 'after' },
    );
    res.status(200).json(editedBase);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deleteOne(req, res) {
  const { id } = req.params;
  await Base.findByIdAndDelete(id);
  res.status(200).json({ message: 'base deleted' });
}

async function getAll(req, res) {
  const bases = await Base.find({});
  return res.status(200).json(bases);
}

async function getOne(req, res) {
  const { id } = req.params;
  const base = await Base.findById(id);
  return res.status(200).json(base);
}

export default { create, edit, deleteOne, getAll, getOne };
