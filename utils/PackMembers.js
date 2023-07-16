const { Collection } = require('discord.js');
const getAllMembers = require('../database/commands/getAllMembers.js');


let regMembers = new Collection();

const updRegMembers = () => {
    const response = getAllMembers(); 
    response.then(data => {
        data.forEach(element => {
            regMembers.set(element.dataValues.Username, element.dataValues);
        });
    });
}


const getRegMembers = () => regMembers;


module.exports = {updRegMembers, getRegMembers};

