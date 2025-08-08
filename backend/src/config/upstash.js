import dotenv from 'dotenv';
import { Ratelimit } from '@upstash/ratelimit'; // ⛔ don't use named import
import { Redis } from '@upstash/redis';

dotenv.config();

//create a rate limiter that allow 100 requests per minute
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '60 s'), // ✅ now this works
  analytics: true,
  prefix: '@noteapp',
});

export default ratelimit;
