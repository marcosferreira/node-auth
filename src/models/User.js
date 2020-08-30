import { Schema, model } from 'mongoose';
import crypto from 'crypto';

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
    set: value => crypto.createHash('md5').update(value).digest('hex')
  }
}, {
  timestamps: true
});

const User = model('User', UserSchema);

export default User;
