const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args, color) => {
	let user = message.mentions.members.first() || message.guild.members.get(args[0]);
  let {body} = await superagent
	.get(`https://nekos.life/api/v2/img/hug`);
  
	let neko = new Discord.RichEmbed()
	.setColor(color)
  .setDescription(`${ user ? `<@${message.author.id}> hug <@${user.id}>` : `Relax i will warm you <@${message.author.id}>`}`)
  .setFooter(`Powered by: Nekos.life`)
	.setImage(body.url);
	message.channel.send(neko);
}

exports.conf = {
  aliases: [],
  cooldown: '7'
}

exports.help = {
	name: "hug",
	description: "hug someone",
	usage: 'hug @mention'
}