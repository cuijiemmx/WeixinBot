require('reify');
require('async-to-gen/register');
const qrcode = require('qrcode-terminal');

const Weixinbot = require('../src/weixinbot');

const bot = new Weixinbot();

bot.on('qrcode', (qr) => {
	qrcode.generate(qr);
});

bot.on('friend', (msg) => {
  console.log(msg.Member.NickName + ': ' + msg.Content);
  bot.sendText(msg.FromUserName, 'Got it');
});

bot.run();
