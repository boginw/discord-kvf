const fs = require('fs');
const { prefix } = require('../../config.json');

module.exports = {
    name: "play",
    description: "Play KVF in your channel!",
    async execute(message) {
        try {
            const guilds = message.client.guildInstances;
            const voiceChannel = message.member.voice.channel;
            
            if (!voiceChannel) return message.channel.send("You need to be in a voice channel to play radio");

            const permissions = voiceChannel.permissionsFor(message.client.user);

            if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
                return message.channel.send("I need the permissions to join and speak in your voice channel!");
            }

            this.stopIfPlaying(message);

            let channel = message.content.slice(prefix.length + this.name.length).split(/ +/);
            
            if (channel.length >= 2) {
                channel = channel[1].toLowerCase();
            } else {
                channel = channel[0];
            }
            
            if (!channel.match(/^[0-9a-z]+$/)) return message.channel.send("Illegal channel name");

            const channelUrl = fs.readFileSync(`./assets/channels/${channel}`, "utf8").trim();

            const guildData = {
                textChannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
                station: channelUrl,
                volume: 5,
            };

            guilds.set(message.guild.id, guildData);

            try {
                guildData.connection = await voiceChannel.join();
                this.play(message);
            } catch (err) {
                console.log(err);
                guilds.delete(message.guild.id);
                return message.channel.send(err);
            }
        } catch (error) {
            console.log(error);
            message.channel.send(error.message);
        }
    },

    play(message) {
        const guild = message.client.guildInstances.get(message.guild.id);
        const dispatcher = guild.connection.play(guild.station)
            .on("finish", () => console.log("Finished"))
            .on("error", error => console.error(error));
        dispatcher.setVolumeLogarithmic(guild.volume / 5);
        guild.textChannel.send(`Start playing`);
    },

    stopIfPlaying(message) {
        const guild = message.client.guildInstances.get(message.guild.id);
        
        if (!guild || !guild.connection || !guild.connection.dispatcher) return;

        guild.connection.dispatcher.end();
        guild.voiceChannel.leave();
    }
};
