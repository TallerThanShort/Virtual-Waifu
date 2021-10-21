module.exports = async () =>{
    await client.user.setPresence({ activity: { name: "vw!help", type: "LISTENING"}, status: 'dnd'}) 
    console.log('waifu awoken');
    // pls work
}