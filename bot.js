const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'wintie woo') {
    	message.reply('joshy woo');
  	}
});


client.on('message', message => {
    if (message.content === 'joshy woo') {
    	message.reply('wintie woo');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
