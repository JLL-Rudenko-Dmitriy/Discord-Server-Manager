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

        return memberData;
    }
    catch(dbError) {
        console.log("DataBase ERROR: " + dbError);
    }
};