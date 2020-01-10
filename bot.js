 const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!winty woo') {
    	message.reply('webby woo');
  	}
});


client.on('message', message => {
    if (message.content === '!webby woo') {
    	message.reply('winty woo');
  	}
});

client.on('message', message => {
    if (message.content === '!fake josh') {
    	message.reply('Fake josh is just a fake josh there is no point in him even being here why he is here I dont know');
  	}
}];

client.on('message', message => {
    if (message.content === '!grayson') { 
    	message.reply('https://cdn.discordapp.com/attachments/660518896071344129/662118682360676362/JPEG_20200101_003529.jpg');
  	}
});

client.on('message', message => {
    if (message.content === '!commands') {
    	message.reply('firgure them out');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
