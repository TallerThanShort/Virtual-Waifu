const Discord = require('discord.js');
require('discord-reply');

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


bot.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    let channel = message.channel;
    
    if(command === 'help'){
        message.channel.send(`commands: help, prefix: $, guilds: ${bot.guilds.cache.size}`);
    }
)}

client.login(process.env.token);
