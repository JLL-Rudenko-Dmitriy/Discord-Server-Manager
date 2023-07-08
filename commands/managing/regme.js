const {SlashCommandBuilder, PermissionFlagsBits, Collection,} = require('discord.js');
const addMember = require('C:\\Users\\ntpyd\\Desktop\\BykaNull\\bots\\ServerManager\\utils\\addMember.js')



module.exports = {
    data: new SlashCommandBuilder()
    .setName('regme')
    .setDescription('Sign out in local database'),
    

    async execute(interaction) {    
        
        const member = interaction.member;
        
        // const Tag  = interaction.user.tag;
        const Tag  = interaction.member.displayName;
        const Username = interaction.user.username;
        const Rate = parseInt(1);
        const TimeStamp = interaction.member.joinedTimestamp;
        
        console.log(interaction);

        // Get all roles of the guild and push lvl role
        const lvlRoles = ['1126913233614282772', '1126913623739072562', '1126913803355947068', '1126913903528525835','1126914023984746597'];
        const lvlR1 = interaction.guild.roles.cache.get(lvlRoles[0]); //Lvl 1 role 
        const lvlR2 = interaction.guild.roles.cache.get(lvlRoles[1]); //Lvl 2 role
        const lvlR3 = interaction.guild.roles.cache.get(lvlRoles[2]); //Lvl 3 role
        const lvlR4 = interaction.guild.roles.cache.get(lvlRoles[3]); //Lvl 4 role
        const lvlR5 = interaction.guild.roles.cache.get(lvlRoles[4]); //Lvl 5 role
        
        // Get all roled of this member
        const user_roles  = member.roles.cache; 
        
        var Hrole = lvlR1.name;
        var RoleId = lvlR1.id;
        var RoleColor = lvlR1.hexColor;

        let flag = false;
        //Register user if he don't have lvl role 

        

        lvlRoles.forEach(role => {
            if (user_roles.has(role)) {
                Hrole = interaction.guild.roles.cache.get(role).name;
                RoleColor = interaction.guild.roles.cache.get(role).hexColor;
                RoleId = interaction.guild.roles.cache.get(role).id;
                flag = true;
            }});
        
            console.log(interaction.guild.roles.cache.get(lvlRoles[0]),RoleColor);    

        if (flag) {
            const response  = await interaction.reply({
                content: `You: ${Username} Already in Rate system.\n PLS, use [\\infome].`,
                components: [],
            });
        }
        else {
        
            //reg user
            addMember(Tag, Username, Rate, Hrole, RoleId, RoleColor, TimeStamp);
            interaction.member.roles.add(lvlR1);

            // MAKE EMBED message to component

            const response = await interaction.reply({
                content: `You: ${Username} was added to Server Rate System!!!\nthank you, enjoy your server's activity.`,
                components: [],
            });
        }
        
        //console.log(_roles.sort((r1, r2) => interaction.member.guild.roles.comparePositions(r1, r2)));
        // roles.forEach(role => console.log(e.name));
    },      
};