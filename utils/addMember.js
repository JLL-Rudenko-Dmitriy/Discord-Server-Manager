const { guildMember, remarks, achivements  } = require('../database/dbObjects.js');

module.exports = async (Tag, Username, HRole, TimeStamp) => {

    console.log(Tag);
    console.log(Username);
    console.log(HRole);
    console.log(TimeStamp);
    


    const regMember = await guildMember.create({
        Tag: Tag, 
        Username: Username, 
        HRole: HRole, 
        TimeStamp: TimeStamp
    });

    // console.log(regMember);
};

