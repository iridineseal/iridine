module.exports.run = async (client, message, args) => {
const m = await message.channel.send(".");
const embed = {
    "description": ``,
    "color": client.resolver.resolveColor('RANDOM'),
    "footer": {},
     fields: [{
            name: "local latency:",
            value: `${m.createdTimestamp - message.createdTimestamp}ms\n`
          },
          {
            name: "api latency:",
            value: `${Math.round(client.ping)}ms\n`
          }
	]
  };
  m.edit({ embed });
}

module.exports.help = {
  name: "ping"
}
