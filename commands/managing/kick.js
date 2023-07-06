const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, InteractionResponse, PermissionFlagsBits } = require('discord.js')

module.exports = {


    data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Kick member from server')

    .addUserOption(option => 
        option.setName('member')
        .setDescription('The member to kick')
        .setRequired(true))

    .addStringOption(option =>
        option.setName('reason')
        .setDescription('The reason for kicking')) 

    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
    .setDMPermission(false),

    async execute(interaction) {
        const target = interaction.options.getUser('member');
        const reason = interaction.options.getString('reason') ?? 'The reason is unknown';
        
        const confirm = new ButtonBuilder()
			.setCustomId('confirm')
			.setLabel('Confirm kick')
			.setStyle(ButtonStyle.Danger);

        const cancel = new ButtonBuilder()
			.setCustomId('cancel')
			.setLabel('Cancel')
			.setStyle(ButtonStyle.Secondary);

        const actRow = new ActionRowBuilder()
			.addComponents(cancel, confirm);

        const response  = await interaction.reply({
            content: `Are you sure you want to ban ${target} for reason: ${reason}?`,
            components: [actRow],
        });

        
        const collectorFilter = i => i.user.id === interaction.user.id;

        try {
            const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60_000 });
        
            if (confirmation.customId === 'confirm') {
                await interaction.guild.members.ban(target);
                await confirmation.update({ content: `${target.username} has been banned for reason: ${reason}`, components: [] });
            } else if (confirmation.customId === 'cancel') {
                await confirmation.update({ content: 'Action cancelled', components: [] });
            }
        } catch (e) {
            await interaction.editReply({ content: 'Confirmation not received within 1 minute, cancelling', components: [] });
        }    
    },
}