module.exports = {
    name: 'stop',
    description: "this command make bot leave vc",
    execute(message, args){
        message.member.voice.channel.leave();
// that should work, right?
    }
}
