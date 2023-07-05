// Functions for logging action

const times = 40;

const repeatS = (ch, timesR) => ch.repeat(timesR);

const logClinetReady = (c) => 
    console.log(
        repeatS('\\', times) + '\n'
        + `Everything is ok!\nLogged in as ${c.user.tag}. \nIs bot: ${c.user.bot}\n`
        + repeatS('\\',times));

module.exports.logClinetReady = logClinetReady;
module.exports.times = times;