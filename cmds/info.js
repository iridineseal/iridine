const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
message.channel.send(new Discord.RichEmbed().setTitle("Iridine").setDescription('').setColor(client.resolver.resolveColor('RANDOM')).addField('Created by:', 'seal#0222 and Servers#3450'));
}

module.exports.help = {
  name: "info"
}