import validator from 'validator';

export const validateEmail = (email) => validator.isEmail(email);
