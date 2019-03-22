const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

 let m = message.content;
 if (m.includes('@everyone')){
 message.channel.send('lol');
 return;
}
else if (m.includes('@here')){
 message.channel.send('lol');
 return;
}


else {
const sayMessage = args.join(" ");
message.delete().catch(O_o=>{});
message.channel.send(sayMessage);
}
}

module.exports.help = {
 name: "say"
}
