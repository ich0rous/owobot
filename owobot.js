//owo whats this???
const fs = require('fs');
const config = require('./config.json');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message', msg => {

	if(msg.author.bot) return; // Check if user is bot.

  if(msg.content.startsWith("owo!")){ // Check for prefix.
    let cmd = msg.content.split("owo!") // Split at the prefix.
    console.log(cmd[0]+cmd[1])
    if(cmd[1] == "?"){ // cmd[1] returns with the actual command.
      msg.channel.sendMessage("OwO, what's this?"); // Respond accordingly.
    } else if(cmd[1] == "img") { // Suck my cock.
      msg.channel.send({
        files: ['https://puu.sh/COkZQ/6dd8c62320.gif'] // Send the remote image.
      })
        .then(console.log) // Stop complaining node.
        .catch(console.error);
    }
  }

  /*

	if(msg.content == "OWO"){
		msg.channel.sendMessage("ÒwÓ, DAFUQ IS DIS???? https://puu.sh/COkZQ/6dd8c62320.gif");
	}

	if(msg.content == "owo?"){
		msg.channel.sendMessage("OwO, what's this?");
	}

	if(msg.content == "owo"){
		msg.channel.sendMessage("OWO");
	}

  */
})

bot.login(config.token);
// Furious hacker noises.
