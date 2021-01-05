const { prefix } = require('../../config.json');

module.exports = {
    name: "salvation",
    description: "Get saved by Jesus while gaming doom!",
    async execute(message) {
        try {
            const guilds = message.client.guildInstances;
            const voiceChannel = message.member.voice.channel;
            
            if (!voiceChannel) return message.channel.send("You need to be in a voice channel to play the word of our lord and saviour!");

            const permissions = voiceChannel.permissionsFor(message.client.user);

            if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
                return message.channel.send("I need the permissions to join and speak in your voice channel!");
            }

            let channel = message.content.slice(prefix.length+4).split(/ +/);

            if (channel.length >= 2) {
                channel = channel[1].toLowerCase();
            } else {
                channel = channel[0];
            }

            let channelUrl = "http://lindinhigh.stream.fo:8000/lindinhigh";

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
        guild.textChannel.send(`Start praying`);
    }
};
