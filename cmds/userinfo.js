const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let eeee = message.mentions.members.first();
  
  const otherembed = new Discord.RichEmbed().setDescription("").setColor("FF4887").setThumbnail(eeee.user.avatarURL).addField("Username", eeee.user.username).addField("Registered at", eeee.user.createdAt).addField("Joined", eeee.joinedAt);
  const serverembed = new Discord.RichEmbed().setDescription("").setColor("FF4887").setThumbnail(message.author.avatarURL).addField("Username", message.author.username).addField("Registered at", message.author.createdAt).addField("Joined", message.member.joinedAt);
  
  if(message.mentions.members.first() !== undefined) {
  return await message.channel.send(otherembed);
  }
  else {
  return message.channel.send(serverembed);
  }
}

module.exports.help = {
  name: "userinfo",
  usage: "userinfo <optional user>"
}
