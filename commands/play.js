const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: "joins vc & plays muzik",
     async execute(message, args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.reply('Join a vc first!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) return message.channel.send('You dont have the rights perms..');
        if(!permissions.has('SPEAK')) return message.channel.send('You dont have the rights perms...');
        if(!args.length) return message.reply('No search query');

        const connect = await voiceChannel.join();

        const result = async (query) => {
            const videoSearch = await ytSearch(query);

            return (videoSearch.videos.length > 1) ? videoSearch.videos[0] : null;
        }

        const video = await result(args.join(' '));

        if(video){
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connect.play(stream, {seek: 0, volume: 2})
            .on('finish', () =>{
                voiceChannel.leave();
            });

            await message.reply(`Now playing ***${video.title}***`);
        } else{
            message.reply('No videos found');
        }
    }
}
// All the above code is basically void, need to add node modules
