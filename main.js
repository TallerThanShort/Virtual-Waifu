const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', async () => {
    
    await client.user.setPresence({ activity: { name: "!help", type: "LISTENING"}, status: 'dnd'}) 
    console.log('waifu awoken')
})

client.login(process.env.token);
