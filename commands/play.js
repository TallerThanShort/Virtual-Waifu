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


        const urlVerification = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }

        if(urlVerification(args[0])){
            
            const connect = await voiceChannel.join();
            const stream = ytdl(args[0], {filter: 'audioonly'});

            connect.play(stream, {seek: 0, volume: 2})
            .on('finish', () =>{
                voiceChannel.leave();
                message.reply('song finished, leaving channel');
            });

            await message.reply(`Now Playing ***Your Link***!`)

            return
        }

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
                message.reply('song finished, leaving channel');
            });

            await message.reply(`Now playing ***${video.title}***`);
        } else{
            message.reply('No videos found');
        }
    }
}
// I hope this freaking works!
