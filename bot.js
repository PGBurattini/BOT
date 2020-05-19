var Discord = require('discord.io');
 
var bot = new Discord.Client({
    token: "NzEyMzQzMTA5ODk5NjQ5MTI0.XsQMRw.nzgvBVK21pxXjEpA5BDoYmbUNpg",
    autorun: true
});
 
bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});
 
bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "Bot, llamalo") {
        bot.sendMessage({to: channelID, message: "!play calocha"});
        console.log('ChannelID: ', channelID);
    }

    if(message === "Entra a llamada"){
        var VoiceChannel = 712372041373974528;
        console.log('VoiceChannel: ', VoiceChannel);
        bot.joinVoiceChannel(VoiceChannel);
        console.log('Ya hice el join ');
    }
});
