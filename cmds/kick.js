module.exports.run = async (client, message, args) => {
let mentioned = message.mentions.users.first();

if(!mentioned) return message.channel.send({ nouser });
}

module.exports.help = {
  name: "kick",
  usage: "kick <@user> [reason]"
}
