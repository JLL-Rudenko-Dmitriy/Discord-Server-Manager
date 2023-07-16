const { guildMember } = require('../dbObjects.js');

// const { Collection }  = require('discord.js');

module.exports = async () => {
    const response = await guildMember.findAll();

    return response;
};