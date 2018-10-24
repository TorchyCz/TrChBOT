const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let usageEmbed = new Discord.RichEmbed()

  .setDescription("Použití příkazů")
  .setColor("#100ba0")
  .addField("!ban", "!ban <uživatel> [důvod]")
  .addField("!help", "!help")
  .addField("!kick", "!kick <uživatel> [důvod]")
  .addField("!report", "!report <uživatel> [důvod]")
  .addField("!serverinfo", "!serverinfo")
  .addField("!usage", "!usage")

  message.channel.send(usageEmbed);
  return;
}

module.exports.help = {
  name: "usage"
}
