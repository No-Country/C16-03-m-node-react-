import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET;

function authMiddleware(req, res, next) {
  const token = req.headers.authorization
    ? req.headers.authorization.split(' ')[1]
    : null;

  if (!token) {
    return res.status(401).json({
      message: 'Access forbidden. No authentication token provided',
    });
  }

  try {
    const payload = jwt.verify(token, SECRET_KEY);
    req.user = payload;
    next();
  } catch (err) {
    res
      .status(403)
      .json({ message: 'Access forbidden. Invalid or expired token' });
  }
}

export default authMiddleware;
