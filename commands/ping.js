module.exports = {
    name: 'ping',
    description: "ping in ms reply thing",
    execute(message, args){
        botMessage = message.channel.send('Calculating ping..').then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
        }).then(botMessage => {
            botMessage.edit(`Ping is of ${ping}ms`);
        })
    }
}
