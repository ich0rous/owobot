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
})

bot.login(config.token);
// Furious hacker noises.
