const Discord = require('discord.js');
require('discord-reply');
const fs = require('fs');

const client = new Discord.Client();

const prefix = '$';
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', async () => {
    
    await client.user.setPresence({ activity: { name: "$help", type: "LISTENING"}, status: 'dnd'}) 
    console.log('waifu awoken')
})


client.on('message', (message) => {
    if (!message.guild) return;
    if(!message.content.startsWith(prefix) || message.author.client) return;
    let channel = message.channel;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'help'){
        message.lineReply(`commands: help, prefix: $, guilds: ${client.guilds.cache.size}`);
    } else if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
});

client.login(process.env.token);
