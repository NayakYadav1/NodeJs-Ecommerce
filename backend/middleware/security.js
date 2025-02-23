import { RateLimiterRedis } from 'rate-limiter-flexible';
import redisClient from '../services/redis';

// 60 requests/minute
const rateLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  points: 60,
  duration: 60
});

export const rateLimit = (req, res, next) => {
  rateLimiter.consume(req.ip)
    .then(() => next())
    .catch(() => res.status(429).send('Too Many Requests'));
};

// Failed login attempts
export const loginLimiter = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (user?.lockUntil > Date.now()) {
    return res.status(403).send('Account locked');
  }
  next();
};