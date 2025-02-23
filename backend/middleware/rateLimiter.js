import { RateLimiterRedis } from 'rate-limiter-flexible';
import redisClient from '../services/redis.js';

// 60 requests/minute per IP
const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  points: 60,
  duration: 60
});

export const rateLimiter = (req, res, next) => {
  limiter.consume(req.ip)
    .then(() => next())
    .catch(() => res.status(429).json({ error: 'Too many requests' }));
};