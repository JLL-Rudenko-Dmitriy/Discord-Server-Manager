const { Events, Collection } = require('discord.js');
const getMember = require('../../database/commands/getMember.js');
const updRate = require('../../database/commands/updRate.js');
const { updRegMembers, getRegMembers } = require('../../utils/PackMembers.js');

const EvaluateRate = (str) => {
	return str.length * 0.25;
}

module.exports = {
	name: Events.MessageCreate,
	async execute(msg) {
		
		if (msg.bot === true || msg.interaction !== null) return;

		else {
		
			const Username = msg.author.username;
			const content = msg.content;
			
			if (getRegMembers().has(Username)) {

				try {
					const member = await getMember(Username);
					const newRate = EvaluateRate(content) + member.Rate;
					updRate(Username, newRate);
				}
				catch(Error) {
					console.log('DB getmember ERROR [msgCrt.js]: ' + Error);
				}
			}
			else {
				console.log(`${Username} is unregistered`);
			}
		}
	},
};