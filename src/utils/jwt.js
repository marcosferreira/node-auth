import jwt from 'jsonwebtoken';

const secret = process.env.SECRET_KEY;

export const sign = payload => jwt.sign(payload, secret, { expiresIn: 86400 });
export const verify = token => jwt.verify(token, secret);
