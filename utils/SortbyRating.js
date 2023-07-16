const { updRegMembers, getRegMembers }  = require('./PackMembers.js');

module.exports = async () => {
    const data = [];
    updRegMembers();

    getRegMembers().forEach(member => {
        data.push(member);
        
    })
    
    const cmp =  ( member1, member2 ) => {
        if (member1.Rate >= member2.Rate) {
            return -1;
        }
        else {
            return 1;
        }
    }
    data.sort(cmp);
    // console.log(data);
    return data;
}