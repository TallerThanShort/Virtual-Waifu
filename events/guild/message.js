module.exports = (Discord, client, message) => {
    const prefix = 'vw!';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    try{
        // Prehistoric hier: client, message, args, Discord
        command.execute(message, args, cmd, client, Discord);
    } catch (err){
        message.reply("There was an error executing this command: " + err);
        console.log(err);
    }
}