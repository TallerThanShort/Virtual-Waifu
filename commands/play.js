module.exports = {
    name: 'play',
    description: "this is the command to join & play muzik",
    execute(message, args){
    const voiceChannel = message.member.voice.channel;
        if(!args){
            message.reply("Please mention a song/URL to play");
        } else if(!message.member.voice.channel){
            message.reply("Please connect to a voice channel!");
        } else{
            message.member.voice.channel.join();
        }
    }
}
// All the above code is basically void, and it can wait until tomorrow for a fix
