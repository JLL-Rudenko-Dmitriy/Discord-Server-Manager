const Sequelize = require('sequelize');
const {db_name, db_user, db_pass, db_host} = require('../configuration/config.json');


const sequelize = new Sequelize(db_name, db_user, db_pass, {
    host: db_host,
    dialect: 'sqlite',
    logging: false,
    //SQLite only:
    storage: '..\\database\\database.sqlite',
});


//Tables:
const guildMember =  require('./tables/guildmembers/guildMembers.js')(sequelize,Sequelize.DataTypes);
const remarks =  require('./tables/guildmembers/remarks.js')(sequelize,Sequelize.DataTypes);
const achivements =  require('./tables/guildmembers/achivments.js')(sequelize,Sequelize.DataTypes);

remarks.belongsTo(guildMember, {foreignKey: 'Tag', as: 'atag'});
achivements.belongsTo(guildMember, {foreignKey: 'Tag', as: 'rtag'});


module.exports = { guildMember, remarks, achivements, sequelize};