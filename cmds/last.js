const config = {
    api_key: '02315f17ad4b3db1e3a991aeebe0d52d',
    secret: '1e9771e81ab65c0f80ae24669ee9986c',
};
const flastm = require('flastm')(config);
const JsonFind = require('json-find');
module.exports.run = async(client, message, args) => {
const user = flastm.user;
let status = "";
var result;
try {
await user.getRecentTracks(args[0]).then(res => result = res);
}
catch(err) {
 return message.channel.send('The user specified does not exist.').then(m => m.delete(10000));
}
result = JSON.parse(JSON.stringify(result).replace('#text', 'text'));
const poop = JsonFind(result);
if(poop.findValues('text').text === undefined) return message.channel.send("That user is not playing any music.");
const trackName = poop.findValues('text').text.toString() + " - " + poop.findValues('name').name.toString();
function Random(num) {return Math.floor(Math.random * num)};
if(poop.findValues('nowplaying').nowplaying == "true") {
	status = "Currently playing for ";
} else {
	status = "Last playing for "	
}
message.channel.send({embed: {
  title: status + poop.findValues('user').user.toString(),
  color: client.resolver.resolveColor('RANDOM'),
  description: trackName
  }});


}


module.exports.help = {
    name : "last"
}
