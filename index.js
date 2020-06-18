require("dotenv").config();
const Bot = require("./src/bot");
const el = require("./src/el");
global.el = el;

// init
const bot = new Bot(el);
global.bot = bot;

bot.init();
bot.listen();