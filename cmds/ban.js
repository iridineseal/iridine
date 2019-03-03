const discord = require('discord.js');
const config = require("../config.json");
const chalk = require("chalk");
module.exports.run = async (client, message, args) => {
message.author.send(message.guild.iconURL);
}

module.exports.help = {
  name: "ban",
  usage: "ban <@user> [reason]"
}








