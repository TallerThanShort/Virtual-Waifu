module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args, Discord){
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Commands')
            .addFields(
                {name: 'Public commands', value: 'help, ping, join, stop, play'},
                {name: 'Developer-only commands', value: 'debug'},
            )
            .setFooter('help for Virtual Waifu')
        
        message.channel.send(helpEmbed);
        message.react('<a:typing:855611027827982357>');
    }
}