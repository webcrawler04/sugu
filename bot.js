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
    if (message.content === 'joshywoo') {
    	message.reply('wintie woo');
  	}
});

client.on('message', message => {
    if (message.content === 'fake josh') {
    	message.reply('Fake josh is just a fake josh there is no point in him even being here why he is here I dont know');
  	}
});


client.on('message', message => {
    if (message.content === 'grayson') {
    	message.reply('A rare boy, with the ability to love with all his heart. He is sensitive, and he will give everything he has to the one he loves. He can be moody at times, and he doesnt like to open up unless he feels absolutely comfortable. He is citrus-scented. He is usually very athletic, but can get frustrated easily. He is caring, loving, and is in tune with how others are feeling. Graysons usually like to help others, and sometimes Graysons give more of themselves than they should.');
  	}
});

client.on('message', message => {
    if (message.content === 'commands') {
    	message.reply('1. wintie woo , 2. joshy woo,3. grayson,4. fake josh');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
