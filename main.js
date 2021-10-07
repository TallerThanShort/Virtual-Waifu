const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', async () => {
    
    await client.user.setActivity(!help { type: "LISTENING" });
    console.log('bot onluine')
})

client.login(process.env.token);
