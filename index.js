'use strict';
const BootBot = require('bootbot');
const config = require('./config.json');

// console.log(config.access_token);
// create new bot 
const bot = new BootBot({
    accessToken: config.access_token,
    verifyToken: config.verify_token,
    appSecret: config.app_secret,
})

bot.on('message', (payload, chat) => {
    const text = payload.message.text;
    chat.say(`Echo: ${text}`);
});
  
bot.start();