module.exports = {
    name: 'debug',
    aliases: ['errors', 'fix'],
    description: 'shows debug info',
    execute(message, args, cmd, client, Discord){
        // This command is to be restricted to the Admin's of my server only:
        if(message.member.roles.cache.has('885460946397577277')){
            console.log('@' + message.author.username + ' has requested debug');
            // Actual command
            const debugEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Waifu's Debug Command")
            .setAuthor('Waifu')
            .setURL('https://www.your-report.com/')
            .addFields(
                {name: 'Discord.js', value: 'v12.5.3'},
                {name: 'Node.js', value: 'v' + process.version},
                {name: 'ffmpeg-static', value: 'v4.4.0'},
                {name: 'yt-search', value: 'v2.10.9'},
                {name: 'ytdl-core', value: 'v4.9.2'},
                {name: 'Waifu Ver', value: "v50, REBORN Series 2"}
            )
            .setFooter("Please note, whichever debugger who successfully summons this command is logged in console, to prevent abuse.")
            message.channel.send(debugEmbed);
        } else{
            message.channel.send(message.author.username + ", you don't have the right permissions to do this!");
        }
    }
}
