const { Events } = require('discord.js');
const logger  = require('../../utils/logfunctions.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {

        const MyWork = () => {
           
        }

        logger.logClinetReady(client);
        //MyWork();
        setInterval(async () => await console.log('Show rating'),1000); //Rating 
        setInterval(async () => await console.log('Check users level and level up'),1000); //Monitoring User's activity
    },
};