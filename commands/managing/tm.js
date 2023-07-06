const { ActionRowBuilder, ButtonBuilder,
        ButtonStyle, SlashCommandBuilder,
        InteractionResponse, PermissionFlagsBits,
        StringSelectMenuBuilder, StringSelectMenuOptionBuilder } = require('discord.js');

module.exports = {
   data: new SlashCommandBuilder()
        .setName('tm')
        .setDescription('timeout member')
        
        .addUserOption(option => 
            option.setName('member')
            .setDescription('The member to timeout')
            .setRequired(true))

        .addStringOption(option =>
                option.setName('reason')
                .setDescription('The reason for timeout'))
        .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
        .setDMPermission(false),

    async execute(interaction) {

        const target = interaction.options.getUser('member');
        const reason = interaction.options.getString('reason') ?? 'The reason is unknown';
        const member = interaction.options.getMember('member');
        

        const select = new StringSelectMenuBuilder()
            .setCustomId('time')
            .setPlaceholder('Select time!')
            .addOptions(require('../../utils/tmselectarr.js'));
                
        const confirm = new ButtonBuilder()
			.setCustomId('confirm')
			.setLabel('Confirm timeout')
			.setStyle(ButtonStyle.Danger);

        const cancel = new ButtonBuilder()
			.setCustomId('cancel')
			.setLabel('Cancel')
			.setStyle(ButtonStyle.Secondary);

        const selectTime = new ActionRowBuilder()
        .addComponents(select);

    
        const actRow = new ActionRowBuilder()
        .addComponents(cancel,confirm);

        const response = await interaction.reply({
            content: `Choose timeout time:`,
            components: [selectTime],
        });
        
        const collectorFilter = i => i.user.id === interaction.user.id;

        try {
            const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60000 });
            if (confirmation.customId === 'time') {
                const Gtime = confirmation.values[0];
                if (confirmation.values[0].endsWith('M')) {
                    const time = confirmation.values[0].replace('M','');
                    await confirmation.update({ 
                        content: `Do you want to timeout:\n ${target}\n for ${time} minutes \n Reason: ${reason}`,
                        components: [actRow], 
                    });
                }
                else {
                    const time = confirmation.values[0].replace('H','');
                    await confirmation.update({ 
                        content: `Do you want to timeout:\n${target}\n for ${time} hours \nReason:\n${reason}`,
                        components: [actRow], 
                    });
                }
            
                try {
                    const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60000 });
                    if (confirmation.customId === 'confirm') {
                        if (Gtime.endsWith('M')) {
                            member.timeout(parseInt(Gtime.replace('H','').replace('M','')) * 60 * 1000);
                        }
                        else {
                            member.timeout(parseInt(Gtime.replace('H','').replace('M','')) * 60 * 60 * 1000);
                        }
                        
                        confirmation.update({
                            content: `${target} \nHas been timeouted for ${Gtime} \nReason:\n${reason}`,
                            components: [],
                        });
                    }
                    else if (confirmation.customId === 'cancel') {
                        confirmation.update({ content: 'Action cancelled', components: []});
                    }

                } catch (e) {
                    await interaction.editReply({ content: 'Confirmation not received within 1 minute, cancelling', components: [] });
                }
            } 
        } catch (e) {
            await interaction.editReply({ content: 'Confirmation not received within 1 minute, cancelling', components: [] });
        }
    },
}
