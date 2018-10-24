const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Informace")
    .setColor("#100ba0")
    .setThumbnail(sicon)
    .addField("Jméno", message.guild.name)
    .addField("Vytvořen", message.guild.createdAt)
    .addField("Připojil jsi se", message.member.joinedAt)
    .addField("Celkem hráčů", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
