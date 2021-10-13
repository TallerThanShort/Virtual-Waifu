module.exports = {
    name: 'play',
    description: "this is the command to join & play muzik",
    execute(message, args){
        if(!args){
            message.reply("Please mention a song/URL to play");
        } else if(!message.member.voice.channel){
            message.reply("Please connect to a voice channel!");
        } else{
            message.member.voice.channel.join();
        }
    }
}
// I'm dumb enough to leave this like this, ok??? ik it wont work
