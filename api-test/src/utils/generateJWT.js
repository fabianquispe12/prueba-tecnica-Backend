import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY || "jwt"

export const generateJWT = async (id, role="user") => {
  try {
    const payload = {
      id,
      role
    };

    const token = await jwt.sign(payload, SECRET_KEY, {
      expiresIn: '1h',
    });

    return token;
  } catch (error) {
    console.error(error);
    throw error;
  }
};