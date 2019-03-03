const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    let code = args.join(" ");
	client.ownerids.forEach(id => {
    if(message.author.id != id) return;
        try {
            let ev = eval(code);
            message.channel.send(`\`\`\`JS\n${ev}\`\`\``);
        } catch (err) {
            message.channel.send(`\`\`\`JS\n${err}\`\`\``);
        }
	});
}


module.exports.help = {
    name : "eval"
}
