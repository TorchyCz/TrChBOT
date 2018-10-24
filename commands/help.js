const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let helpEmbed = new Discord.RichEmbed()
  .setDescription("Pomoc")
  .setColor("#100ba0")
  .addField("!help", "Zobrazí tuto pomocnou zprávu")
  .addField("!serverinfo", "Zobrazí informace o serveru")
  .addField("!report", "Nahlásí hráče")
  .addField("!kick", "Vyhodí hráče z Discord serveru")
  .addField("!ban", "Zabanuje hráče z Discord serveru")
  .addField("!usage", "Zobrazí jak použít příkazy")

  message.channel.send(helpEmbed);
  return;
}

module.exports.help = {
  name: "help"
}
