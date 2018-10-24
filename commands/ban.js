const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //!ban @user
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Uživatel nenalezen!");
    let bReason = args.join(" ").slice(22);
    if(!bReason)  return message.channel.send("Please specify the reason");
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Nemáš oprávění!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tento uživatel nelze kicknout!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#100ba0")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "banned");
    if(!incidentchannel) return message.channel.send("Nenalezen channel Banned.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
