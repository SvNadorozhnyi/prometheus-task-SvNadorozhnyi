const redisAddress = process.env.REDIS_ADDRESS || 'localhost';
const redisPort = process.env.REDIS_PORT || 6379;

module.exports = { redisAddress, redisPort };
