module.exports = {
    name: 'debug',
    aliases: ['errors', 'fix'],
    description: 'shows debug info',
    execute(message, args, cmd, client, Discord){
        // This command is to be restricted to the Admin's of my server only:
        if(message.member.roles.cache.has('885460946397577277')){
            // To verify this command isn't being used maliciously (Some new Admins):
            console.log('@' + message.author.username + ' has requested debug');
            // Actual command
            const debugEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Waifu's Debug Command")
            .setAuthor('Waifu')
            .setURL('https://www.your-report.com/')
            .addFields(
                {name: 'Discord Ver', value: `WIP`},
                {name: 'Node.js Ver', value: process.version},
                {name: 'Waifu Ver', value: "V.50 S.REBORN"}
            )
            .setFooter("Please note, whoever requests this command is logged in console to prevent abuse.")
            message.channel.send(debugEmbed);
        } else{
            message.channel.send(message.author.username + ", you don't have the right permissions to do this!");
        }
    }
}