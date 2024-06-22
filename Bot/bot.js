/* eslint-disable import/no-extraneous-dependencies */
const { Telegraf } = require('telegraf');

const bot = new Telegraf('');

const webLink = 'https://earnest-choux-4fabac.netlify.app/';

bot.start((ctx) => ctx.reply('Welcome to Tic-Tac-Toe game', {
  reply_markup: {
    keyboard: [[{ text: 'web app', web_app: { url: webLink } }]],
  },
}));

bot.launch();
