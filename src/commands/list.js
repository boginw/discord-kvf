const fs = require('fs');

module.exports = {
    name: 'list',
    description: 'List available stations',
    execute(message) {
        const guild = message.client.guildInstances.get(message.guild.id);
        if (!message.member.voice.channel) 
            return message.channel.send('You have to be in a voice channel to list the channels!');
        if (!guild || !guild.connection || !guild.connection.dispatcher) return;
        
        const channels = fs.readdirSync(__dirname + '/../../assets/channels/')
        guild.textChannel.send(channels) 
    },
};