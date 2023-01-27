const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tictactoe')
		.setDescription('Plays a game of Tic-Tac-Toe with another user.')
        .addUserOption(option =>
            option.setName('challenge')
                  .setDescription('Select user you would like to challenge.')),
	async execute(interaction) {
		//await interaction.reply('Yo yo yo what is up!');
        await interaction.reply({ content: 'Yo yo yo what is up?', ephemeral: true });
        //this code gets the original sent reply JSON
        //const message = await interaction.fetchReply();
        //console.log(message);
	},
};