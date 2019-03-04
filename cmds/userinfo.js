const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
let eeee = message.mentions.members.first() || message.member; 
return message.channel.send(new Discord.RichEmbed().setDescription("").setColor("FF4887").setThumbnail(eeee.user.avatarURL).addField("Username", eeee.user.username).addField("Registered at", eeee.user.createdAt).addField("Joined", eeee.joinedAt));
}

module.exports.help = {
  name: "userinfo",
  usage: "userinfo <optional user>"
}
