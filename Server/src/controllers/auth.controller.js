import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { UsersSchema } from '../models/User.js';

const User = mongoose.model('User', UsersSchema);

const SECRET_KEY = process.env.JWT_SECRET;

async function validateUser(req, res) {
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    return { error: 'Este correo electrónico ya está registrado.' };
  }

  const specialCharRegex = /[!@#$%^&*()_+\-=()[\]{};':"\\|,.<>/?]+/;
  if (
    req.body.password.length < 8 ||
    !specialCharRegex.test(req.body.password)
  ) {
    return {
      error:
        // 'The password must be at least 8 characters long and contain at least 1 special character',
        'La contraseña debe tener al menos 8 caracteres y un caracter especial.'
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
      return res.status(400).send({ message: 'Rol de usuario no válido.' });
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
    let errorMessage = 'Error al crear el usuario.';
    if (err.code === 11000) {
      errorMessage = 'Este correo electrónico ya está registrado.';
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
    if (req.user.role !== 'userAdmin') {
      return res
        .status(403)
        .send({ message: 'Access forbidden. Insufficient privileges.' });
    }

    if (req.body.role && req.body.role !== 'userBase') {
      return res.status(400).send({ message: 'Rol de usuario no válido.' });
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
    let errorMessage = 'Error al crear el usuario.';
    if (err.code === 11000) {
      errorMessage = 'Este correo electrónico ya está registrado.';
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
      const error = new Error('Correo electrónico o contraseña incorrectos');
      error.status = 404;
      throw error;
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      const error = new Error('Correo electrónico o contraseña incorrectos');
      error.status = 401;
      throw error;
    }
    const token = jwt.sign({ _id: user._id, role: user.role }, SECRET_KEY, {
      expiresIn: '1d',
    });
    return res.status(200).json({ token, userRole: user.role });
  } catch (err) {
    const errorMessage =
      err.message ||
      'Internal server error while trying to log in. Please try again later';
    const statusCode = err.status || 500;
    return res.status(statusCode).json({ message: errorMessage });
  }
}

async function deleteAccount(req, res) {
  const userIdToDelete = req.params.id;
  const requestingUserId = req.user._id;
  const requestingUserRole = req.user.role;
  try {
    const userToDelete = await User.findById(userIdToDelete);
    if (!userToDelete) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }
    if (
      requestingUserRole === 'userAdmin' &&
      userToDelete.role !== 'userAdmin'
    ) {
      await User.findByIdAndDelete(userIdToDelete);
      return res.status(200).json({ message: 'Usuario eliminado exitosamente.' });
    } else if (
      requestingUserRole === 'user' &&
      userIdToDelete === requestingUserId
    ) {
      await User.findByIdAndDelete(userIdToDelete);
      return res.status(200).json({ message: 'Usuario eliminado exitosamente.' });
    } else {
      return res.status(403).json({
        message: 'Acceso denegado. No tienes permiso para eliminar este usuario.',
      });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export { createUserWithUserRole, createUserWithBaseRole, login, deleteAccount };
