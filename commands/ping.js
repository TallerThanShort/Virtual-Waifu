module.exports = {
    name: 'ping',
    description: "ping in ms reply thing",
    execute(message, args, cmd, client, Discord){
        botMessage = message.channel.send('Calculating ping..').then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit(`Ping is of ${ping}ms`);
        })
    }
}
