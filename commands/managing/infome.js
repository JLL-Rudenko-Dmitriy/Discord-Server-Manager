const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const getMember = require('../../database/commands/getMember');
const infoMeEmbed = require('../../utils/EmbedMeConstructor.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('infome')
    .setDescription('Display information about you'),

    async execute(interaction) {
        const user = interaction.user;
        const userName = user.username;

        member = await getMember(userName);
        const TimeStamp = new Date(member.TimeStamp).getTime();
        
        InfoMe = new infoMeEmbed(member.RoleColor, member.AvatarURL, member.BannerURL, member.Tag, member.Username, member.HRole, member.Rate, TimeStamp);

        interaction.reply({
            content: "",
            embeds: [InfoMe]
        });
    }
}