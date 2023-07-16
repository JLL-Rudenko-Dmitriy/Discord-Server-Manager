const { where, attributes, Op } = require('sequelize');
const { guildMember } = require('../dbObjects.js');


module.exports = async (userName) => {
    try {
        const response = await guildMember.findAll({
            where: {
                Username : userName
            },
            attributes: ['Username', 'Tag', 'Rate', 'HRole', 'RoleId', 'RoleColor', 'AvatarURL', 'BannerURL', 'TimeStamp'],
        });

        const memberData = response[0];

        if (memberData.BannerURL == null) {
            memberData.BannerURL = 'https://media.discordapp.net/attachments/1127562593305903176/1128053211362766848/wide-mandalla.gif';
        }

        return memberData;
    }
    catch(dbError) {
        console.log("DataBase ERROR: " + dbError);
    }
};