const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = ".or ";

const token = 'huuhh?????????';

bot.on('ready', () =>{
	console.log('El lacayo ha despertado.');

})
// (!message.member.roles.cache.has("687047008854343711"))

bot.on('message', message =>{

	var userRole
	if (message.member.roles.cache.has("687047008854343711") === true)
	{
		userRole = "Ocarina";
	}
	if (message.member.roles.cache.has("687038326779543611") === true)
	{
		userRole = "Master";
	}
	if (message.member.roles.cache.has("687041923889889280") === true)
	{
		userRole = "Gaelyn";
	}
	if (message.member.roles.cache.has("687043765709701214") === true)
	{
		userRole = "Riivak";
	}
	if (message.member.roles.cache.has("687044594734465096") === true)
	{
		userRole = "Crocantte";
	}
	if (message.member.roles.cache.has("687047011152691210") === true)
	{
		userRole = "Payaso";
	}
	if (message.member.roles.cache.has("687048814904999948") === true)
	{
		userRole = "Rimuru";
	}
	if (message.member.roles.cache.has("687061224957149256") === true)
	{
		userRole = "Akane";
	}
	if (message.member.roles.cache.has("687061234478219319") === true)
	{
		userRole = "Trafalgar";
	}

	console.log(userRole);
	if (message.content === "marika")
	{
		message.reply("marika tú.");
	}
	let args = message.content.substring(PREFIX.length).split(" ");

	if (args[0] === "ayuda")
	{
			console.log('Me piden ayuda.');
			switch(userRole)
			{
				case("Ocarina"):
				message.channel.send("Lo siento ama Ocarina, aún no estoy entrenado.");
				break;
				case("Master"):
				message.channel.send("Lo siento mi señor, aún no estoy entrenado.");
				break;
				case("Gaelyn"):
				message.channel.send("Lo siento amo Gaelyn, aún no estoy entrenado.");
				break;
				case("Riivak"):
				message.channel.send("Lo siento amo Riivak, aún no estoy entrenado.");
				break;
				case("Crocantte"):
				message.channel.send("Lo siento amo Crocantte, aún no estoy entrenado.");
				break;
				case("Payaso"):
				message.channel.send("Lo siento payaso, no hablo contigo.");
				break;
				case("Rimuru"):
				message.channel.send("Lo siento amo Rimuru, aún no estoy entrenado.");
				break;
				case("Akane"):
				message.channel.send("Lo siento ama Akane, aún no estoy entrenado.");
				break;
				case("Trafalgar"):
				message.channel.send("Lo siento amo Trafalgar, aún no estoy entrenado.");
				break;
			}
	}
		
	if (args[0] === "lacayo")
	{
	console.log('Me llaman.');
			switch(userRole)
			{
				case("Ocarina"):
				message.channel.send("Buenas ama Ocarina, ¿qué desea?");
				break;
				case("Master"):
				message.channel.send("Buenas mi señor, ¿qué desea?");
				break;
				case("Gaelyn"):
				message.channel.send("Buenas amo Gaelyn, ¿qué desea?");
				break;
				case("Riivak"):
				message.channel.send("Buenas amo Riivak, ¿qué desea?");
				break;
				case("Crocantte"):
				message.channel.send("Buenas amo Crocantte, ¿qué desea?");
				break;
				case("Payaso"):
				message.channel.send("Lo siento, no respondo a payasos. Si preguntas por qué, jamás lo entenderías 🤡");
				break;
				case("Rimuru"):
				message.channel.send("Buenas amo Rimuru, ¿qué desea?");
				break;
				case("Akane"):
				message.channel.send("Buenas ama Akane, ¿qué desea?");
				break;
				case("Trafalgar"):
				message.channel.send("Buenas amo Trafalgar, ¿qué desea?");
				break;
			}
	}
	if (args[0] === "muestrate")
	{
	console.log('Me muestro.');
	message.channel.send("Me muestro ante tí.", {files: ["lacayo.jpg"]});
			
	}

	if (args[0] === "payaso")
	{
				message.channel.send("Steven Vauxhall es un payaso 🤡");
	}
});

bot.login(token);