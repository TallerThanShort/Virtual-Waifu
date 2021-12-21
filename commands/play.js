const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

const queue = new Map();

module.exports = {
    name: 'play',
    aliases: ['skip', 'stop'],
    description: "joins vc & plays muzik",
     async execute(message, args, cmd, client, Discord){
        //const voice_channel = message.member.voice.channel;

        const { joinVoiceChannel } = require('@discordjs/voice');

        if(!joinVoiceChannel) return message.reply('Join a vc first!');
        //const permissions = joinVoiceChannel.permissionsFor(message.client.user);
        //if(!permissions.has('CONNECT')) return message.channel.send("You dont have `CONNECT` perms..");
        //if(!permissions.has('SPEAK')) return message.channel.send("You dont have `SPEAK` perms...");


        const server_queue = queue.get(message.guild.id);

        if(cmd === 'play'){
            if(!args.length) return message.reply('No search query');
            joinVoiceChannel({
                channelId: message.member.voice.channel.id,
                guildId: message.guild.id,
                adapterCreator: message.guild.voiceAdapterCreator
            })
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

            if(!server_queue){
            const queue_constructor = {
                joinVoiceChannel: joinVoiceChannel,
                text_channel: message.channel,
                connection: null,
                songs: []
            }
            queue.set(message.guild.id, queue_constructor);
            queue_constructor.songs.push(song);

            try{
                const connection = await joinVoiceChannel.join();
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

    else if(cmd === 'skip'){
        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })
        skip_song(message, server_queue);
    }
    else if(cmd === 'stop'){
        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })
        stop_song(message, server_queue);
    }
  }
}
const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);
    if(!song){
        song_queue.joinVoiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, { filter: 'audioonly' });
    song_queue.connection.play(stream, { seek: 0, volume: 1 })
    .on('finish', () => {
        song_queue.songs.shift();
        video_player(guild, song_queue.songs[0]);
    });
    await song_queue.text_channel.send(`Now playing ***${song.title}***`)
}

const skip_song = (message, server_queue) =>{
    if(!message.member.voice.channel) return message.reply('You must be in a vc to execute this command!');
    if(!server_queue){
        return message.reply('No more songs in queue');
        song_queue.joinVoiceChannel.leave();
    }
    server_queue.connection.dispatcher.end();
}
const stop_song = (message, server_queue) =>{
    if(!message.member.voice.channel) return message.reply('You must be in a vc to execute this command!');
    server_queue.songs = [];
    server_queue.connection.dispatcher.end();
    song_queue.joinVoiceChannel.leave();
}
