const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
const nouser = await new Discord.RichEmbed().setDescription("You need to mention a user to kick.").setColor(client.resolver.resolveColor('RANDOM'));


let mentioned = message.mentions.users.first();

if(!mentioned) message.channel.send({ nouser });
}

module.exports.help = {
  name: "kick",
  usage: "kick <@user> [reason]"
}
