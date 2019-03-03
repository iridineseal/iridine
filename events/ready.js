const chalk = require("chalk");
module.exports = async (client) => {
    console.log(chalk.green('Iridine loaded successfully.'));
    await client.user.setPresence({ game: { name: `Iridine v1`}});
}

