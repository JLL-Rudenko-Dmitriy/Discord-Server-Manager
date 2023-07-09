const { guildMember, remarks, achivements  } = require('../dbObjects.js');

module.exports = async (Tag, Username, Rate, HRole, RoleId, RoleColor, AvatarHash, AvatarURL, BannerURL, TimeStamp) => {
    try {
        const regMember = await guildMember.create({
            Tag: Tag, 
            Username: Username, 
            Rate: Rate,
            HRole: HRole,
            RoleId: RoleId, 
            RoleColor: RoleColor,
            AvatarHash: AvatarHash,
            AvatarURL: AvatarURL,
            BannerURL: BannerURL,
            TimeStamp: TimeStamp
        });
    }
    catch(dbError) {
        console.log("DataBase ERROR: " + dbError);
    }
    

    // console.log(regMember);
};

