const Duiscord = require("discord.js");

module.exports.run = async => {
  
  //!hello
  
  let embed = new Discord.RichEmbed()
  .setDescription("Hello")
  .setColor("#bc0000")
  .addField("Hello", `${messafge.author}`);
  
  message.channel.send(embed);
  return;
}
module.exports.help = {
  name: "hello"
}
