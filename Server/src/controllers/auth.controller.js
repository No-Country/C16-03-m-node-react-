import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { UsersSchema } from '../models/Users.js';

const User = mongoose.model('User', UsersSchema);

const SECRET_KEY = process.env.JWT_SECRET;

const createUser = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send({ message: 'Email already registered' });
    }
    const specialCharRegex = /[!@#$%^&*()_+\-=()[\]{};':"\\|,.<>/?]+/;
    if (
      req.body.password.length < 5 ||
      !specialCharRegex.test(req.body.password)
    ) {
      return res.status(400).send({
        message:
          'The password must be at least 5 characters long and contain at least 1 special character',
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role || 'user',
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
};

const login = async (req, res, next) => {
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
    const token = jwt.sign({ _id: user._id }, SECRET_KEY, { expiresIn: '1d' });
    return res.status(200).json({ token });
  } catch (err) {
    const errorMessage =
      err.message ||
      'Internal server error while trying to log in. Please try again later';
    const statusCode = err.status || 500;
    return res.status(statusCode).json({ message: errorMessage });
  }
};

export { createUser, login };
