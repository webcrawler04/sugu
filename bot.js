const Discord = require('discord.js');
const client = new Discord.Client(LyQMJwJ65AHJ0VE1BeFbs78bPKDbLvOQ);

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
