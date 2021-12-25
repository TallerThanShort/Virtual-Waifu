module.exports = {
    name: 'help',
    aliases: ['h'],
    description: 'sends command embed',
    execute(message, args, cmd, client, Discord){
        const footer1 = 'help for Virtual Waifu#5702 REBORN v50'
        const footer2 = 'TIP: Use vw!help {command} to get additional help'
        const footer3 = "Waifu's prefix is always 'vw!'"
        var fters = [footer1, footer2, footer3]
        var footers = fters[Math.floor(Math.random()*fters.length)];
        if(!args[0]){
            const helpEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Commands')
            .addFields(
                {name: 'Public commands', value: 'ping, help, play, stop, skip, waifu'},
                {name: 'Developer-only commands', value: 'debug'},
                {name: 'Prefix', value: 'vw!'}
            )
            .setFooter(footers)
            
            message.channel.send(helpEmbed);
            message.react('855611027827982357');
        } else if(args[0] === 'ping'){
            const pingEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Ping')
            .addFields(
                {name: 'Aliases', value: 'pin, ing'},
                {name: 'Permissions', value: 'any'},
                {name: 'Function', value: 'Returns server-side ping delay for the bot.'}
            )
            .setFooter(footers)
            message.channel.send(pingEmbed);
            message.react('855611027827982357');
        } else if(args[0] === 'debug'){
            const debugFail = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Debug')
            .addFields(
                {name: 'Aliases', value: 'errors, fix'},
                {name: 'Permissions', value: 'Private'},
                {name: 'Function', value: 'Returns a log of the latest errors, along with shard count, ping and server-count.'}
            )
            .setFooter(footers)
            message.channel.send(debugFail);
            message.react('855611027827982357');
        } else if(args[0] === 'play'){
            const playEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Play')
            .addFields(
                {name: 'Aliases', value: 'add'},
                {name: 'Permissions', value: 'any'},
                {name: 'Function', value: 'Requires args [link || query]. Adds music to the queue'}
            )
            .setFooter(footers)
            message.channel.send(playEmbed);
            message.react('855611027827982357');
        } else if(args[0] === 'stop'){
            const stopEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Stop')
            .addFields(
                {name: 'Aliases', value: 'N/A'},
                {name: 'Permissions', value: 'any'},
                {name: 'Function', value: 'Stops the music player and deletes all tracks from queue'}
            )
            .setFooter(footers)
            message.channel.send(stopEmbed);
            message.react('855611027827982357');
        } else if(args[0] === 'skip'){
            const skipEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Skip')
            .addFields(
                {name: 'Aliases', value: 'N/A'},
                {name: 'Permissions', value: 'any'},
                {name: 'Function', value: 'Skips the track and plays next in queue. If no more tracks exist, stops the player'}
            )
            .setFooter(footers)
            message.channel.send(skipEmbed);
            message.react('855611027827982357');
        }
    }
}