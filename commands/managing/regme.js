const {SlashCommandBuilder, PermissionFlagsBits, Collection, EmbedBuilder } = require('discord.js');
const addMember = require('../../database/commands/addMember.js');
const EmbedConstructor = require('../../utils/EmbedMeConstructor.js');
const getMember = require('../../database/commands/getMember.js');
const { updRegMembers } = require('../../utils/PackMembers.js');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('regme')
    .setDescription('Sign out in local database')
    .addStringOption(option => 
        option
        .setName('bannerurl')
        .setDescription('Your link to gif banner')
        .setRequired(false)),
    

    async execute(interaction) {    
        
        const member = interaction.member;
        const user = interaction.user;
       
        const Tag  = member.displayName;
        const Username = user.username;
        const Rate = parseInt(1);
        const TimeStamp = member.joinedTimestamp;
        const AvatarHash = user.avatar;
        const AvatarURL = user.avatarURL();
        let BannerURL = user.bannerURL();


        // Get all roles of the guild and push lvl role
        const lvlRoles = ['1126913233614282772', '1126913623739072562', '1126913803355947068', '1126913903528525835','1126914023984746597'];
        const lvlR1 = interaction.guild.roles.cache.get(lvlRoles[0]); //Lvl 1 role 
        const lvlR2 = interaction.guild.roles.cache.get(lvlRoles[1]); //Lvl 2 role
        const lvlR3 = interaction.guild.roles.cache.get(lvlRoles[2]); //Lvl 3 role
        const lvlR4 = interaction.guild.roles.cache.get(lvlRoles[3]); //Lvl 4 role
        const lvlR5 = interaction.guild.roles.cache.get(lvlRoles[4]); //Lvl 5 role
        
        // Get all roled of this member
        const user_roles = member.roles.cache; 
        
        var Hrole = lvlR1.name;
        var RoleId = lvlR1.id;
        var RoleColor = "#b3b3b3";

        let flag = false;
        //Register user if he don't have lvl role 

        

        lvlRoles.forEach(role => {
            if (user_roles.has(role)) {
                Hrole = interaction.guild.roles.cache.get(role).name;
                RoleColor = interaction.guild.roles.cache.get(role).hexColor;
                RoleId = interaction.guild.roles.cache.get(role).id;
                flag = true;
            }});
         

        if (flag) {
            const response  = await interaction.reply({
                content: `You: ${Username} Already in Rate system.\n PLS, use [\\infome].`,
                components: [],
            });
        }
        else {
            console.log(BannerURL);
            if (BannerURL === undefined) {
                BannerURL = interaction.options.getString('bannerurl');
            }

            // MAKE EMBED message to component
            const InfoMembed = new EmbedConstructor(RoleColor, AvatarURL, BannerURL, Tag, Username, Hrole, Rate, TimeStamp);
                
            try {
                const response = await interaction.reply({
                    content: "",
                    embeds: [InfoMembed],
                });
                try {
                    addMember(Tag, Username, Rate, Hrole, RoleId, RoleColor, AvatarHash, AvatarURL, BannerURL, TimeStamp);
                    updRegMembers();
                }
                catch(dbError) {
                    console.log("DataBase ERROR: " + dbError);
                }
                interaction.member.roles.add(lvlR1);
            }
            catch(error) {
                console.log(error);
            }

        }
    },      
};