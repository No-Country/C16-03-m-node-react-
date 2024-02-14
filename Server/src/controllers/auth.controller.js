import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { UsersSchema } from '../models/Users.js';

const User = mongoose.model('User', UsersSchema);

const SECRET_KEY = process.env.JWT_SECRET;

async function validateUser(req, res) {
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    return { error: 'Email already registered' };
  }

  const specialCharRegex = /[!@#$%^&*()_+\-=()[\]{};':"\\|,.<>/?]+/;
  if (
    req.body.password.length < 5 ||
    !specialCharRegex.test(req.body.password)
  ) {
    return {
      error:
        'The password must be at least 5 characters long and contain at least 1 special character',
    };
  }
  return null;
}

async function createUserWithUserRole(req, res) {
  try {
    const validationError = await validateUser(req, res);
    if (validationError) {
      return res.status(400).send({ message: validationError.error });
    }

    if (req.body.role !== 'user') {
      return res.status(400).send({ message: 'Invalid user role' });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      role: 'user',
    });

    await user.save();
    user.password = undefined;
    return res.status(201).send(user);
  } catch (err) {
    let errorMessage = 'Error creating user.';
    if (err.code === 11000) {
      errorMessage = 'The email address is already registered';
    } else if (err.name === 'ValidationError') {
      const field = Object.keys(err.errors)[0];
      errorMessage = err.errors[field].message;
    } else {
      errorMessage = err.message || errorMessage;
    }
    return res.status(500).send({ message: errorMessage });
  }
}

async function createUserWithBaseRole(req, res) {
  try {
    if (req.user.role !== 'userBase') {
      return res
        .status(403)
        .send({ message: 'Access forbidden. Insufficient privileges.' });
    }

    if (req.body.role && req.body.role !== 'userBase') {
      return res.status(400).send({ message: 'Invalid user role' });
    }

    const validationError = await validateUser(req, res);
    if (validationError) {
      return res.status(400).send({ message: validationError.error });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      role: 'userBase',
    });

    await user.save();
    user.password = undefined;
    return res.status(201).send(user);
  } catch (err) {
    let errorMessage = 'Error creating user.';
    if (err.code === 11000) {
      errorMessage = 'The email address is already registered';
    } else if (err.name === 'ValidationError') {
      const field = Object.keys(err.errors)[0];
      errorMessage = err.errors[field].message;
    } else {
      errorMessage = err.message || errorMessage;
    }
    return res.status(500).send({ message: errorMessage });
  }
}

async function login(req, res, next) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      const error = new Error('Email or password incorrect');
      error.status = 404;
      throw error;
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      const error = new Error('Email or password incorrect');
      error.status = 401;
      throw error;
    }
    const token = jwt.sign({ _id: user._id, role: user.role }, SECRET_KEY, {
      expiresIn: '1d',
    });
    return res.status(200).json({ token });
  } catch (err) {
    const errorMessage =
      err.message ||
      'Internal server error while trying to log in. Please try again later';
    const statusCode = err.status || 500;
    return res.status(statusCode).json({ message: errorMessage });
  }
}

export { createUserWithUserRole, createUserWithBaseRole, login };
