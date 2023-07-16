const { idRateChannel } = require('../configuration/config.json');
// const { TableEmbed } = require('');
const sortByRating = require('./SortbyRating.js');
const { EmbedBuilder } = require('discord.js');


module.exports = async (client) => {
    console.log(idRateChannel);
    const data = await sortByRating();
    // console.log(data);

    const whiteSpace = '--------------------';
    const titles = ['Username', 'Rating', 'LvL'];
    const fields = [];
    const topRatingUserAvatar = data[0].AvatarURL;
    
    titles.forEach(title => {
        fields.push({name: title, value: '\u200b', inline: true});
    })



    data.forEach(member => {
        fields.push({
            name: whiteSpace,
            value: member.Username,
            inline: true
        });
        fields.push({
            name: whiteSpace,
            value: String(member.Rate),
            inline: true
        });
        fields.push({
            name: whiteSpace,
            value: member.HRole,
            inline: true
        });
        console.log(member);
    });

    console.log(fields) ;

    const embed = new EmbedBuilder()
    .setAuthor({name: 'Rating'})
    .setThumbnail(topRatingUserAvatar)
    .addFields(fields);


    client.channels.cache.get(idRateChannel).send({
        content: '',
        embeds: [embed],
    });
}