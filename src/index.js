// Require the necessary discord.js classes
const {Client, Events, GatewayIntentBits } = require('discord.js');
const {token} = require('../configuration/config.json');
const logger = require('../utils/logfunctions.js')



// Create an instance of the class Client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Login Client instance in Discord
client.login(token);

// Check bot status

client.once(Events.ClientReady,c => logger.logClinetReady(c));