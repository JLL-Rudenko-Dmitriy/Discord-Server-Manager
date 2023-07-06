const { Events } = require('discord.js');
const logger  = require('../../utils/logfunctions.js')

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        logger.logClinetReady(client);
    },
};