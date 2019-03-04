const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
message.channel.send(new Discord.RichEmbed().setDescription("Iridine\n\nCreated by seal#0222").setColor(client.resolver.resolveColor('RANDOM')));
}

module.exports.help = {
  name: "info"
}