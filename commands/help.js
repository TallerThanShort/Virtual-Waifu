module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args, Discord){
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Commands')
            .addFields(
                {name: 'Public commands', value: 'help, ping, play, stop, waifu'},
                {name: 'Developer-only commands', value: 'debug'},
                {name: 'Prefix', value: 'vw!'}
            )
            .setFooter('help for Virtual Waifu#5702 (895251019603259403) v7')
        
        message.channel.send(helpEmbed);
        message.react('855611027827982357');
    }
}
