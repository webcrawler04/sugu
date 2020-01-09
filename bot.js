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
});

Discord.on('message', function (message) {
	if (message.content === 'hi') {
		return message.reply('Hello!');
	  }
  });

Discord.on('message',  function (message) {
  const cat = request.get('https://aws.random.cat/meow');
   if(message.content === '!cat') {
	cat.then(r => message.reply(r.body.file));
   }
});

  Discord.on('message', function (message) {
	if (message.content === 'sa') {
		return message.reply('Aleyküm selam.');
	  }
  			});
  		Discord.on('message', function (message) {
			if (message.content === '!help') {
				return message.author.send('Commands: `!help`, `!avatar`, `!about`, `!thonk`, `!cat`, `!ping`, `!8ball`, `!roll`, `!eval`, `!say`, `!randomcat`');
			  }
  }				);

  Discord.on('message', function (message) {
	if (message.content.startsWith('!8ball')) {
		const replies = ["It is certain",
		"It is decidedly so",
			"Without a doubt",
		"Yes, definitely",
			"You may rely on it",
		"As I see it, yes",
			"Most likely",
		"Outlook good",
			"Yes",
		"Signs point to yes",
			"Reply hazy try again",
		"Ask again later",
			"Better not tell you now",
		"Cannot predict now",
			"Concentrate and ask again",
		"Don't count on it",
			"My reply is no",
		"My sources say no",
			"Outlook not so good",
		"Very doubtful"];
			message.replytext = Math.floor((Math.random() * replies.length) + 0);
		return message.reply(replies[message.replytext]);
	  }
});

Discord.on('message', function (message) {
	if (message.content.split('').join('') === '!roll') {
		return message.reply(`U got a ${Math.floor((Math.random() * 6) + 1)}`);
	  }
});

Discord.on('message', function (message) {
	if (message.content.startsWith('!')) 		{
		return message.reply('Unknown command!');
          }
});

Discord.on('message', function (message) {
	
	if (message.content === '!thonk') {
		
		Discord.users.forEach(g => {
			
			g.send("thonk")
			
		})

	  }
	
});

Discord.on('message', 	function(message) {
    if (msg.content === '!about') {
        return message.reply('This is the best bot on planet. Pls upvote');
    }
});

Discord.on('message', function (message) {
	const randomNumber = Math.random();
    if (randomNumber < 0.05) {
		return message.reply(`LEVEL UP! YOU ARE NOW LEVEL **${Math.floor((Math.random() * 21) + 2)}**`);
    }
});

Discord.on('message', function(message) {
	if (message.content.startsWith('!eval ')) {
		const script = message.content.substring('!eval '.length);
	const result = eval(script);
			return message.reply(result.toString());
	}
});

Discord.on('message', function(message) {
	if (message.content.startsWith('!say ')) {
		return message.reply(message.content.substring('!say '.length));
	}
})

Discord.on('message', function (message) {
		if (message.content.startsWith('!randomcat') && true){
 const randomcat = 'https://i.imgur.com/jjqKt7t.gifv';
   return message.reply(`here is ur random cat ${randomcat}`) }
	return randomcat
 return 'hi'
})

Discord.on("message", async (message) => (messag) => (messa) => (mess) => (mes) => (me) => (m) => (message) => {
    if(!(message.content !== "!!!!infernal")){
        if(message.author.id !== !Discord.user.id) message.channel.send(Array.from("Mwawah, you're caught in the infernal loop").join(" "))
    }
});

Discord.on('message', function (message) {
	if (message.content.includes('fuck')) {
		return message.reply('nO swearing!!111!1')
	}
})

Discord
           .
           on
           (
           "message"
           ,
           function
           (
           message
           ) 
           {
           if
           (
           message
           .
           startsWith
           (
           "!ayy"
           )
           )
           {
           message
           .
           reply
           (
           "lmao"
           )
	   }
           }
           )


Discord.on("message", function (message) {
  var boolean = true;
  if (!!!!Boolean(boolean) !== false && Boolean(boolean) === true) {
    {
      {
        {
          {
            {
              {
                {
                  {
                    {
                      {
                        if (!!!!Boolean(message.content.includes("discord.gg")) === true && Boolean(message.content.includes("discord.gg")) !== false) {
                          message.delete();
                          message.reply("No Invites!!1! You will get baned soon.")
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

function keanuReeves()                              					{
	return "keanu reeves".repeat(100);	
											}

Discord.on										(
	"message"									, 
	   	message 								=> 	
	   										{
			if(message.content.match(/keanu/gi))       			{
	   			if(message.content.match(/reeves/gi))     		{
					message.channel.send(keanuReeves())		}
											}
											}
											)


const guildMemberAdd = 'message';
Discord.on(guildMemberAdd, function (aaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA)                      {
 console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')                                       ;
  if (aaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.content.includes('!avatar'))                         {
        aaaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.reply('https://www.youtube.com/watch?v=3-rfBsWmo0M');
                                                                                                                            }
                                                                                                                            }
)

Discord.on('message', message => {
	// This will fix a bug caused by the !8ball command causing a black hole in a random place in Discord
 
});



client.on('message', message => {
    if (message.content === '!grayson') { 
    	message.reply('https://cdn.discordapp.com/attachments/660518896071344129/662118682360676362/JPEG_20200101_003529.jpg');
  	}
});

client.on('message', message => {
    if (message.content === '!commands') {
    	message.reply('1. !winty woo , 2. !webby woo , 3. !grayson , 4. !fake josh');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
