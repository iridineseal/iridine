const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
const nouser = await new Discord.RichEmbed().setDescription("You need to mention a user to kick.").setColor(client.resolver.resolveColor('RANDOM'));
const noperms = await new Discord.RichEmbed().setDescription("I don’t have permission to kick this user.").setColor(client.resolver.resolveColor('RANDOM'));

let mentioned = message.mentions.users.first();

if(!mentioned) return message.channel.send(nouser);
if(!mentioned.kickable) return message.channel.send(noperms);
}

module.exports.help = {
  name: "kick",
  usage: "kick <@user> [reason]"
}
