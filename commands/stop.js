module.exports = {
    name: 'stop',
    description: "this command make bot leave vc",
     async execute(client, message, args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.reply('no vc');
        await voiceChannel.leave();
        await message.channel.send('Left vc');
    }
}
