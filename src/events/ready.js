const { Events } = require('discord.js');
const logger  = require('../../utils/logfunctions.js');
const { updRegMembers, getRegMembers } = require('../../utils/PackMembers.js');
const sendRating = require('../../utils/SendRating.js');


module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        logger.logClinetReady(client);
        
        sendRating(client);

        setInterval(async () => await sendRating(client),(1000 * 60 * 60 * 24 * 7)); //Rating 
       // setInterval(async () => await console.log('Check users level and level up'),1000); //Monitoring User's activity
    },
};