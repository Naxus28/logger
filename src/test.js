var logger = require('./index');

logger.log({'message': 'hello world'});
logger.log({'logType': 'error'});
logger.log({'message': 'hello world', 'logType': 'error'});
logger.log({'message': 'hello world', 'logType': 'notice'});
logger.log({'message': 'hello world', 'logType': 'warn'});
logger.log({'message': 'hello world', 'logType': 'success'});
logger.log({'message': 'hello world', 'logType': 'succss'});
logger.log({'mesage': 'hello world', 'logType': 'success'});