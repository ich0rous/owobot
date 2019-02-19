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

  if(msg.content.startsWith("owo!")){
    let cmd = msg.content.split("owo!")
    if(cmd[1] == "?"){
      msg.channel.sendMessage("OwO, what's this?");
    }
  }

	if(msg.content == "OWO"){
		msg.channel.sendMessage("ÒwÓ, DAFUQ IS DIS???? https://puu.sh/COkZQ/6dd8c62320.gif");
	}

	if(msg.content == "owo?"){
		msg.channel.sendMessage("OwO, what's this?");
	}

	if(msg.content == "owo"){
		msg.channel.sendMessage("OWO");
	}
})





bot.login(config.token);
