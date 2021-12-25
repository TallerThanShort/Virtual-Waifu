const Discord = require('discord.js');

const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login('ODk1MjUxMDE5NjAzMjU5NDAz.YV11fA.ncpM-tna2kU7w935GJvRetv8aFU');