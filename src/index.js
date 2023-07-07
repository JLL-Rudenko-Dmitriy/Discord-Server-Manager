const fs = require('node:fs');
const path = require('node:path');

// Require the necessary discord.js classes
const {Client, Collection, GatewayIntentBits } = require('discord.js');
const {token} = require('../configuration/config.json');

const { Op } = require('sequelize');
const { guildMember, remarks, achivements  } = require('../database/dbObjects.js');




// Create an instance of the class Client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.commands = new Collection();

const foldersPath = path.join(__dirname.replace('src',''), 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
        
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
            console.log(command);
		} 
        else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}


const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(token);