module.exports = {
    name: 'ping',
    description: "ping in ms reply thing",
    execute(message, args){
        message.channel.send('Calculating ping..').then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;

            message.channel.send(`Ping is of ${ping}ms`)
        })
    }
}