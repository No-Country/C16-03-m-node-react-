import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import mongoose from 'mongoose';
import { BaseSchema } from '../models/Base.js';

const Base = mongoose.model('Base', BaseSchema);

class BaseMiddlewares {
  validateToken(req, res, next) {
    const token = req.headers.authorization?.slice(7) || null;
    if (!token) {
      return res.status(401).json({ message: 'no token provided' });
    }
    const decodedToken = jwt.verify(token, config.app.secretKey);
    if (decodedToken.role !== 'userBase') {
      return res.status(401).json({ message: 'Insufficient privileges' });
    }
    req.user = decodedToken;
    next();
  }

  validateData(req, res, next) {
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

  async validateBaseId(req, res, next) {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: 'invalid id' });
    }
    const base = await Base.findById(id);
    if (!base) {
      return res
        .status(404)
        .json({ message: 'no base founded with id: ' + id });
    }
    next();
  }
}

export default new BaseMiddlewares();
