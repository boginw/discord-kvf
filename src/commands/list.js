const fs = require('fs');

module.exports = {
    name: 'list',
    description: 'List available stations',
    execute(message) {
        const guild = message.client.guildInstances.get(message.guild.id);
        if (!guild || !guild.textChannel) return;
        
        const channels = fs.readdirSync(__dirname + '/../../assets/channels/')
        guild.textChannel.send(channels) 
    },
};