const { where } = require('sequelize');
const { guildMember } = require('../dbObjects.js');

module.exports = async (Username, Rate) => {
    const response = await guildMember.update({Rate: Rate},{
        where: {
            Username: Username
        }
    }   

)};