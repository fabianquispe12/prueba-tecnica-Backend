import bcrypt from 'bcryptjs';

export const encryptPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    return encryptedPassword;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const comparePassword = async (password, encryptedPassword) => {
  try {
    const isValid = await bcrypt.compare(password, encryptedPassword);
    return isValid;
  } catch (error) {
    console.error(error);
    throw error;
  }
};