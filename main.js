const Discord = require('discord.js');
require('discord-reply');
const fs = require('fs');

const client = new Discord.Client();

const prefix = 'vw!';
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', async () => {
    await client.user.setPresence({ activity: { name: "vw!help", type: "LISTENING"}, status: 'dnd'}) 
    console.log('waifu awoken')
})


client.on('message', message =>{
    if (!message.guild) return;
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    let channel = message.channel;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    } else if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command === 'play'){
        client.commands.get('play').execute(message, args);
    } else if(command === 'stop'){
        client.commands.get('stop').execute(message, args);
    } else if(command === 'waifu'){
        message.channel.send('https://raw.githubusercontent.com/TallerThanShort/Virtual-Waifu/main/mawaw-147v2-ghpicsay.jpg')
    }
});
