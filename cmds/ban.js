const Discord = require('discord.js');
const chalk = require("chalk");
module.exports.run = async (client, message, args) => {
const nouser = await new Discord.RichEmbed().setDescription("You need to mention a user to ban.").setColor(client.resolver.resolveColor('RANDOM'));
const noperms = await new Discord.RichEmbed().setDescription("I don’t have permission to ban this user.").setColor(client.resolver.resolveColor('RANDOM'));
const noperms2 = await new Discord.RichEmbed().setDescription("You are missing the permission `BAN_MEMBERS`.").setColor(client.resolver.resolveColor('RANDOM'));
const staff = await new Discord.RichEmbed().setDescription("The mentioned user is a staff member.").setColor(client.resolver.resolveColor('RANDOM'));
let mentioned = message.mentions.members.first() || message.guild.members.get(args[0]);
let reason = args.slice(1).join(' ') || 'No reason provided';
const ban = await new Discord.RichEmbed().setDescription(`${mentioned.user.tag} was banned by ${message.author.toString()} for ${reason}`).setColor(client.resolver.resolveColor('RANDOM'));

if(message.member.hasPermission('BAN_MEMBERS') != true) return message.channel.send(noperms2);
if(!mentioned) return message.channel.send(nouser);
if(mentioned.bannable != true) return message.channel.send(noperms);
if(mentioned.hasPermission('BAN_MEMBERS')) return message.channel.send(staff);
try {
mentioned.ban(reason);
message.channel.send(ban);
}
catch(e) {
return message.channel.send(noperms.setDescription(e));
}
}

module.exports.help = {
  name: "ban",
  usage: "ban <@user> [reason]"
}








