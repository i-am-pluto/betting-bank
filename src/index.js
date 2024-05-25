require('dotenv').config();
const { Telegraf, Markup } = require("telegraf");
const handlers = require('./src/handlers');
const connectDB = require('./config/db');
const UserService = require('./src/service/UserService');
const { default: mongoose } = require('mongoose');
const dmBotOwner = require('./src/helper/dmBotOwner');

const { NAME, TOKEN } = process.env;

const bot = new Telegraf(TOKEN, { username: NAME });

connectDB();

// launch the bot and add the handlers here



bot.launch({ dropPendingUpdates: true });
console.log("Bot is running...");

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
