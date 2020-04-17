import winston, { format, transports } from 'winston';
import { StreamOptions } from 'morgan';

const logger = winston.createLogger({
  format: format.combine(format.cli(), format.colorize()),
  transports: [
    new transports.Console({
      level: 'debug',
      handleExceptions: true,
    }),
  ],
  exitOnError: false,
});

export class LoggerStream implements StreamOptions {
  write(message: string) {
    logger.info(message.trim());
  }
}

export default logger;
