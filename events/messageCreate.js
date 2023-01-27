const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		//console.log('Message = ' + message.content);
		//console.log(message);

		if (message.author.bot) {
			//do nothing if message comes from bot
			return;
		}

		if (message.content.includes("school") && message.content.includes("shooting")) {
			await message.reply({ content: `For legal reasons, this message is a joke because it references school shootings and does not reflect intent by ${message.author}.` });	
		}
		
		return;
	},
};