const winston = require('winston');

const myFormat = winston.format.printf(({
  level, message, timestamp, stack,
}) => `${timestamp} ${level}: ${stack || message}`);
const date = new Date();
const logFileName = `${date.getFullYear()}_${date.getMonth()}_${date.getDay()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`;
// i need to assign it in declaration for intellisense and to avoid no one if match
let logger = winston.createLogger();
if (process.env.NODE_ENV === undefined) {
  logger = winston.createLogger({
    level: 'http',
    format: winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.errors({ stack: true }),
      myFormat,
    ),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: `./logs/session_${logFileName}.log` }),
    ],
  });
}

module.exports = logger;
