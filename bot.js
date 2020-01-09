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

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    if (!message.mentions.members.first()) return message.reply('You need to mention the user to slap!');
    
    let slap = await client.nekoslife.sfw.slap();
    
    let embed = new Discord.RichEmbed()
    .setTitle(message.author.username + ' slapped ' + message.mentions.members.first().user.username)
    .setImage(slap.url)
    .setColor('#363942');

    message.channel.send(embed);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'slap',
  category: 'Weeb',
  description: 'Returns a slap',
  usage: 'slap <user>'
};


client.on('message', message => {
    if (message.content === '!webby woo') {
    	message.reply('winty woo');
  	}
});

client.on('message', message => {
    if (message.content === '!fake josh') {
    	message.reply('Fake josh is just a fake josh there is no point in him even being here why he is here I dont know');
  	}
});


client.on('message', message => {
    if (message.content === '!grayson') { 
    	message.reply('A rare boy, with the ability to love with all his heart. He is sensitive, and he will give everything he has to the one he loves. He can be moody at times, and he doesnt like to open up unless he feels absolutely comfortable. He is citrus-scented. Can get frustrated easily. He is caring, loving, and is in tune with how others are feeling. Graysons usually like to help others, and sometimes Graysons give more of themselves than they should.');
  	}
});

client.on('message', message => {
    if (message.content === '!commands') {
    	message.reply('1. !winty woo , 2. !webby woo , 3. !grayson , 4. !fake josh');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
