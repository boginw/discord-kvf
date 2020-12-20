module.exports = {
    name: "play",
    description: "Play KVF in your channel!",
    async execute(message) {
        try {
            const guilds = message.client.guildInstances;
            const voiceChannel = message.member.voice.channel;
            
            if (!voiceChannel) return message.channel.send("You need to be in a voice channel to play KVF!");

            const permissions = voiceChannel.permissionsFor(message.client.user);

            if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
                return message.channel.send("I need the permissions to join and speak in your voice channel!");
            }

            const guildData = {
                textChannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
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
        const dispatcher = guild.connection.play("http://netvarp.kringvarp.fo:443/uvhm")
            .on("finish", () => console.log("Finished"))
            .on("error", error => console.error(error));
        dispatcher.setVolumeLogarithmic(guild.volume / 5);
        guild.textChannel.send(`Start playing`);
    }
};