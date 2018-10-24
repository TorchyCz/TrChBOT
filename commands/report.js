const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Uživatel nenalezen!");
    let errorEmbed = new Discord.RichEmbed()
    .setDescription("Error")
    .setColor("#100ba0")
    .addField("Chyba", "Uživatel nemůže být nahlášen");
    if(rUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(errorEmbed);
    let reason = args.join(" ").slice(22);
    if(!rUser)  return message.channel.send("Please specify the reason");

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Report")
    .setColor("#15f153")
    .addField("Nahlážený uživatel", `${rUser} s ID: ${rUser.id}`)
    .addField("Nahlášen uživatelem", `${message.author} s ID: ${message.author.id}`)
    .addField("Kanál", message.channel)
    .addField("Čas", message.createdAt)
    .addField("Důvod", reason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    let noChannel = new Discord.RichEmbed()
    .setDescription("Error")
    .setColor("#100ba0")
    .addField("Chyba", "Nenalezen kanál reports");
    if(!reportschannel) return message.channel.send(noChannel);


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
}

module.exports.help = {
  name: "report"
}
