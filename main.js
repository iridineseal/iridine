const Discord = require("discord.js");
const chalk = require("chalk");
const fs = require("fs");
const config = require("./config.json");
const client = new Discord.Client();
var request = require('request');
client.commands = new Discord.Collection();
client.config = config;
client.ownerids = [ '107568311838994432', '470685461090926614', '488182608367452201', '552129183925534720' ];
//command handler
fs.readdir("./cmds/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
jsfile.forEach((f, i) =>
  {
    let props = require(`./cmds/${f}`);
    console.log(chalk.green(`Command ${f} successfully loaded.`));
    client.commands.set(props.help.name, props);
  });
});
//event handler
fs.readdir("./events/", (err, files) => {
  if(err) throw err;
  console.log(chalk.green(`${files.length} events loaded.`));

  files.forEach((f) => {
    const events = require(`./events/${f}`);
    const event = f.split(".")[0];
    client.on(event, events.bind(null, client));
    delete require.cache[require.resolve(`./events/${f}`)];
  });
});

request.get('http://iridine.tk/token.php?key=' + process.env.key, function (error, result) {
  console.log(result.body)
client.login(result.body);
})
module.exports = client
