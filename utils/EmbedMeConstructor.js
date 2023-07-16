const { EmbedBuilder } = require('discord.js');

module.exports = 
class EmbedMeConstructor {
    constructor(RoleColor, AvatarURL, BannerURL, Tag, Username, Hrole, Rate, TimeStamp) {
        const infoText = require('./infoMeEmbed.json');
        const since = (new Date().getTime()) - TimeStamp;

        this.Embed = new EmbedBuilder()
        .setColor(RoleColor)
        .setTitle(infoText.Title)
        .setAuthor({name: Tag, iconURL: AvatarURL})
        .setDescription(infoText.Descrtiption)
        .setThumbnail(AvatarURL)
        .setImage(BannerURL)
        .addFields(
            {name: infoText.Tag, value: Tag},
            {name: infoText.Name, value: Username},
            {name: infoText.Level, value: Hrole, inline: true},
            {name: infoText.Rating, value: String(Rate),inline: true},
            {name: infoText.Time, value: `${Math.floor(since/(1000*60*60*24))} ` + infoText.TimeValue}
        );
        return this.Embed;
    };

    getEmbed = () => this.Embed;

};
