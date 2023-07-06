const { StringSelectMenuOptionBuilder } = require('discord.js');

const timeSelectArray = [];

timeSelectArray.push(new StringSelectMenuOptionBuilder()
    .setLabel('1m')
    .setDescription('One minute timeout')
    .setValue('1M'));

timeSelectArray.push(new StringSelectMenuOptionBuilder()
    .setLabel('3m')
    .setDescription('Three minute timeout.')
    .setValue('3M'));

timeSelectArray.push(new StringSelectMenuOptionBuilder()
    .setLabel('5m')
    .setDescription('Five minute timeout')
    .setValue('5M'));

timeSelectArray.push(new StringSelectMenuOptionBuilder()
    .setLabel('15m')
    .setDescription('Fifteen minute timeout')
    .setValue('15M'));

timeSelectArray.push(new StringSelectMenuOptionBuilder()
    .setLabel('30m')
    .setDescription('Thirty minute timeout')
    .setValue('30M'));

timeSelectArray.push(new StringSelectMenuOptionBuilder()
    .setLabel('1h')
    .setDescription('One hour timeout')
    .setValue('1H'));

timeSelectArray.push(new StringSelectMenuOptionBuilder()
    .setLabel('3h')
    .setDescription('Three hours timeout')
    .setValue('3H'));

timeSelectArray.push(new StringSelectMenuOptionBuilder()
    .setLabel('5h')
    .setDescription('Five hours timeout')
    .setValue('5H'));

timeSelectArray.push(new StringSelectMenuOptionBuilder()
    .setLabel('15h')
    .setDescription('Fifteen hours timeout')
    .setValue('15H'));

timeSelectArray.push(new StringSelectMenuOptionBuilder()
    .setLabel('24h')
    .setDescription('Forty two hours timeout')
    .setValue('24H'));

module.exports = timeSelectArray;