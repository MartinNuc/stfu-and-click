import redis from 'redis';
import logger from '../utils/logger';

const client = redis.createClient();
client.on('error', (err) => logger.error(err));

export default client;
