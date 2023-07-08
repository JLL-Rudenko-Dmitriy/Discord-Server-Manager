const { guildMember, remarks, achivements  } = require('../database/dbObjects.js');

module.exports = async (Tag, Username, Rate, HRole, RoleId, RoleColor, AvatarHash, TimeStamp) => {
    const regMember = await guildMember.create({
        Tag: Tag, 
        Username: Username, 
        Rate: Rate,
        HRole: HRole,
        RoleId: RoleId, 
        RoleColor: RoleColor,
        AvatarHash: AvatarHash,
        TimeStamp: TimeStamp
    });

    // console.log(regMember);
};

