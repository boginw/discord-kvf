const fs = require('fs')
const Discord = require('discord.js');
const Client = require('./client');
const { prefix } = require('../config.json');
const token = fs.readFileSync("./token", "utf8");
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));
const client = new Client();

client.commands = new Discord.Collection();

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

console.log(client.commands);

client.once('ready', () => {
    console.log('Ready!');
});

client.once('reconnecting', () => {
    console.log('Reconnecting!');
});

client.once('disconnect', () => {
    console.log('Disconnect!');
});

client.on('message', async message => {
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    try {
        command.execute(message);
    } catch (error) {
        console.error(error);
        message.reply('There was an error trying to execute that command!');
    }
});

client.login(token);