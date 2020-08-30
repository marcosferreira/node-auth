import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  username: String,
  password: String
}, {
  timestamps: true
});

const User = model('User', UserSchema);

export default User;
