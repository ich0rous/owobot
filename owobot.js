//owo whats this???
const fs = require('fs');
const config = require('./config.json');
const utils = require('./lib/utils.js')
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message', msg => {

	if(msg.author.bot) return; // Check if user is bot.

  if(msg.content.startsWith("owo!")){ // Check for prefix.
    let cmd = msg.content.split("owo!") // Split at the prefix.
    if(cmd[1] == "?"){ // cmd[1] returns with the actual command.
      msg.channel.sendMessage("OwO, what's this?"); // Respond accordingly.
    } else if(cmd[1] == "img") { // Suck my cock.
      utils.sendImage(msg, "https://puu.sh/COkZQ/6dd8c62320.gif")
    } else if(cmd[1] == "bongo") { // Literally a picture of Bongo cat.
      utils.sendImage(msg, "https://thumbs.gfycat.com/AffectionateDimIberianlynx-small.gif")
    } else if(cmd[1] == "bird") {
      utils.sendImage(msg, "https://puu.sh/wcMZy/294569d999.jpg")
    }
  }
})

bot.login(config.token);
// Furious hacker noises.
