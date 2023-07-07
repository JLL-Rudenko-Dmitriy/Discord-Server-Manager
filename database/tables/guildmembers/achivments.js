module.exports = (sequlize,dataTypes) => {
    return sequlize.define('Achivements', {
        Uid: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 

        Tag: {
            type: dataTypes.STRING,
            unique: true,
        },

        Description: {
            type: dataTypes.STRING,
        },

        ShortRemark: {
            type: dataTypes.STRING,
            allowNull: false,
        },
    });
};