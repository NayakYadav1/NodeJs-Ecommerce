import redis from 'redis';

const redisClient = redis.createClient({
  url: process.env.REDIS_URL
});

// Cache product listings for 10 minutes
export const cacheProducts = (key, data) => {
  redisClient.setex(key, 600, JSON.stringify(data));
};

export default redisClient;