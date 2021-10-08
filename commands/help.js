module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args, Discord){
        const sus0 = 'Make sure to check our website to know when the bot is down!'
        const sus1 = 'Make sure to check our website to know when the bot is under maintenence!'
        const sus2 = 'SYSbot has a localhost:9000 website!'
        const sus3 = 'R.I.P. Chawi. You will be missed!'
        const sus4 = 'Cheesecake!'  
        var stus = [sus1, sus0, sus2, sus3, sus4]
        var status = stus[Math.floor(Math.random()*stus.length)];
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Commands')
            .setURL('https://ckstudios2018.github.io/syslbot/')
            .addFields(
                {name: 'Public commands', value: '!help, !ping, !join, !stop, !avatar, !p, !explain {what to explain}'},
                {name: 'Developer-only commands', value: '!debug'},
            )
            .setFooter('help for Virtual Waifu')
        
        message.channel.send(helpEmbed);
        message.react('840218925412515901');
    }
}
