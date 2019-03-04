const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
const nouser = await new Discord.RichEmbed().setDescription("You need to mention a user to kick.").setColor(client.resolver.resolveColor('RANDOM'));
const noperms = await new Discord.RichEmbed().setDescription("I don’t have permission to kick this user.").setColor(client.resolver.resolveColor('RANDOM'));
const noperms2 = await new Discord.RichEmbed().setDescription("You are missing the permission `KICK_MEMBERS`.").setColor(client.resolver.resolveColor('RANDOM'));
const staff = await new Discord.RichEmbed().setDescription("The mentioned user is a staff member.").setColor(client.resolver.resolveColor('RANDOM'));
let mentioned = message.mentions.members.first();
let reason = args.slice(1).join(' ');
const kick = await new Discord.RichEmbed().setDescription(`${mentioned.user.tag} was kicked by ${message.author.toString()} for ${reason}`).setColor(client.resolver.resolveColor('RANDOM'));

if(message.member.hasPermission('KICK_MEMBERS') != true) return message.channel.send(noperms2);
if(!mentioned) return message.channel.send(nouser);
if(mentioned.kickable != true) return message.channel.send(noperms);
if(mentioned.hasPermission('KICK_MEMBERS')) return message.channel.send(staff);
return message.channel.send(kick);
}

module.exports.help = {
  name: "kick",
  usage: "kick <@user> [reason]"
}
