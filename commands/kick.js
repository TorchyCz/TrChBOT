const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Uživatel nenalezen");
    let kReason = args.join(" ").slice(22);
    if(!kReason)  return message.channel.send("Please specify the reason");
    let noPerms = new Discord.RichEmbed()
    .setDescription("Error")
    .setColor("#100ba0")
    .addField("Chyba", "Nemáš oprávění!");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nemáš oprávění!");
    let errorEmbed = new Discord.RichEmbed()
    .setDescription("Error")
    .setColor("#100ba0")
    .addField("Chyba", "Uživatel nemůže být vyhozen");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(errorEmbed);

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#100ba0")
    .addField("Vyhozený uživatel", `${kUser} s ID ${kUser.id}`)
    .addField("Vyhozen uživatelem", `<@${message.author.id}> s ID ${message.author.id}`)
    .addField("Kanál", message.channel)
    .addField("Čas", message.createdAt)
    .addField("Důvod", kReason);

    let kickChannel = message.guild.channels.find(`name`, "kicks");
    let noChannel = new Discord.RichEmbed()
    .setDescription("Error")
    .setColor("#100ba0")
    .addField("Chyba", "Nenalezen kanál kicks");
    if(!kickChannel) return message.channel.send(noChannel);

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
    return;
}

module.exports.help = {
  name:"kick"
}
