module.exports = async (Discord, client) => {
    await client.user.setPresence({ activity: { name: "vw!help | Waifu Reborn", type: "LISTENING"}, status: 'dnd'})
    console.log('Waifu Reborn!');
    console.log(`AWOKEN ON: ${client.guilds.cache.size} GUILDS!`);
}