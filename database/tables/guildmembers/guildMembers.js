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
        },

        HRole: {
            type: dataTypes.STRING,
        },

        TimeStamp: {
            type: dataTypes.DATE,
            allowNull: false,
        },
    });
};