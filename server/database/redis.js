const config = require('config');
const Redis = require('ioredis');

const {port, host} = config.get('redis');

const redis = new Redis(port, host);
// const redisExpireTime = config.get('redis.expireTime');
// const redis = Redis.createClient(redisUrl);

// redis.getAsync = util.promisify(redis.get);
// redis.expireTime = redisExpireTime;

redis.remove = redis.flushdb();

module.exports = redis;
