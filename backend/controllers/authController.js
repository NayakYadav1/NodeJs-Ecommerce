import User from '../models/User.js';
import { sendLockEmail } from '../services/email.js';

export const googleAuth = (req, res) => {
  // Google OAuth logic
};

export const handleFailedLogin = async (email) => {
  const user = await User.findOne({ email });
  user.loginAttempts += 1;

  if (user.loginAttempts >= 5) {
    user.lockUntil = Date.now() + 15 * 60 * 1000; // Lock for 15 mins
    await sendLockEmail(email);
  }

  await user.save();
};