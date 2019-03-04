module.exports.run = async (client, message, args) => {
const embed = {
    "description": `last <user> - lastfm status of specified user\nkick <user> <reason> - kicks mentioned user from the guild\n`,
    "color": client.resolver.resolveColor('RANDOM'),
    "footer": {},
     fields: []
  };
        message.channel.send({ embed });
}

module.exports.help = {
  name: "help"
}