// eslint-disable-next-line import/no-extraneous-dependencies
import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN);

const webLink = 'https://earnest-choux-4fabac.netlify.app/';

bot.start((ctx) => ctx.reply('Welcome to Tic-Tac-Toe game', {
  reply_markup: {
    keyboard: [[{ text: 'web app', web_app: { url: webLink } }]],
  },
}));

bot.launch();
