import mongoose from 'mongoose';
import { BaseSchema } from '../models/Base.js';

const Base = mongoose.model('Base', BaseSchema);

class BaseController {
  async create(req, res) {
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

  async edit(req, res) {
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

  async delete(req, res) {
    const { id } = req.params;
    await Base.findByIdAndDelete(id);
    res.status(200).json({ message: 'base deleted' });
  }

  test(req, res) {
    res.send('pasate por el middleware');
  }
}

export default new BaseController();
