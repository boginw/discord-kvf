module.exports = {
    name: 'stop',
    description: 'Stop playing KVF!',
    execute(message) {
        const guild = message.client.guildInstances.get(message.guild.id);
        if (!message.member.voice.channel) 
            return message.channel.send('You have to be in a voice channel to stop the music!');
        
        if (!guild || !guild.connection || !guild.connection.dispatcher) return;
        
        guild.connection.dispatcher.end();
        guild.voiceChannel.leave();
    },
};