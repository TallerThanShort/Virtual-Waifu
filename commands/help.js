module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args, Discord){
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Commands')
            .addFields(
                {name: 'Public commands', value: 'help, ping, play, stop'},
                {name: 'Developer-only commands', value: 'debug'},
            )
            .setFooter('help for Virtual Waifu v0.1.1 (BETA)')
        
        message.channel.send(helpEmbed);
        message.react('855611027827982357');
    }
}
