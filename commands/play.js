const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

const queue = new Map();

module.exports = {
    name: 'play',
    aliases: ['skip', 'stop'],
    description: "joins vc & plays muzik",
     async execute(message, args, cmd, client, Discord){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.reply('Join a vc first!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) return message.channel.send("You dont have `CONNECT` perms..");
        if(!permissions.has('SPEAK')) return message.channel.send("You dont have `SPEAK` perms...");


        const server_queue = queue.get(message.guild.id);

        if(cmd === 'play'){
            if(!args.length) return message.reply('No search query');
            let song = {};

            if(ytdl.validateURL(args[0])){
                const songInfo = await ytdl.getInfo(args[0]);
                song = { title: songInfo.videoDetails.title, url: songInfo.videoDetails.video_url }
            } else{
                const videoFinder = async (query) =>{
                    const result = await ytSearch(query);
                    return (result.videos.length > 1) ? result.videos[0] : null;
                }

                const video = await videoFinder(args.join(' '));
                if(video){
                    song = { title: video.title, url: video.url }
                } else{
                    message.channel.send('*ERROR FINDING VIDEO*');
                }
            }
        }
        if(!server_queue){
            const queue_constructor = {
                voice_channel: voiceChannel,
                text_channel: message.channel,
                connection: null,
                songs: []
            }
            queue.set(message.guild.id, queue_constructor);
            queue_constructor.songs.push(song);

            try{
                const connection = await voiceChannel.join();
                queue_constructor.connection = connection;
                video_player(message.guild, queue_constructor.songs[0]);
            } catch (err){
                queue.delete(message.guild.id);
                message.channel.send("There was an error. `error_code=10053`");
                throw err;
            }
        } else{
            server_queue.songs.push(song);
            return message.channel.send(`***${song.title}*** added to queue.`);
        }
    }
}

const video_player = async (guild, song) => {
    
}
