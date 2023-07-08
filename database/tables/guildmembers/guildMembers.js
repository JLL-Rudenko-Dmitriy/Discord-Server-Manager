module.exports = (sequlize,dataTypes) => {
    return sequlize.define('GuildMembers', {
        Uid: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 
        
        Tag: {
            type: dataTypes.STRING,
            unique: true,
        },

        Username: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        Rate: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },

        HRole: {
            type: dataTypes.STRING,
        },

        RoleId: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        RoleColor: {
            type: dataTypes.STRING,
            allowNull: false,
        },

        AvatarHash: {
            type: dataTypes.STRING,
        },

        AvatarURL: {
            type: dataTypes.STRING,
        },  

        BannerURL: {
            type: dataTypes.STRING,
        },

        TimeStamp: {
            type: dataTypes.DATE,
            allowNull: false,
        },
    });
};