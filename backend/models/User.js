import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  name: String,
  loginAttempts: { type: Number, default: 0 },
  lockUntil: { type: Date },
  googleId: String,
  cart: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number
  }]
});

export default mongoose.model('User', UserSchema);