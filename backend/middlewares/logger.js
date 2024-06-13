const winston = require('winston');
const morgan = require('morgan');
const dotenv = require('dotenv');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console()
  ],
});

logger.stream = {
  write: (message) => {
    logger.info(message.trim());
  },
};

module.exports = logger;
