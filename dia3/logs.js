const logger = require('node-color-log');


let message = "Hello, this is a test message";

// normal log
logger.color('green').italic().log(message)
// // Attribute log
// logger.color('red').bgColor('blue')
//       .bold().italic().dim().reverse().underscore().strikethrough()
//       .log(message);
// // use `append` to joint contents, and use `log` to print out at the end
// logger.color('red').bold().append('message_style_1')
//       .bgColor('white').italic().append('message_style_2')
//       .strikethrough().log('message_style_3');

// // use `reset` to clean the attributes
// logger.bgColor('red').append('background red color message')
//       .reset() // by calling this, background is reset
//       .log('default background color message');