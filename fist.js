// require the module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
client.login('token-here');  // DO NOT ENTER THE REAL TOKEN, ITS VITAL TO AVOID GETTING HACKED

// listen for messages, yes yes the autorespond thingy
const ilona = '351295902415192069';
const fisty = '675596728056938518';
const wagon = '393379461900533760';
const dedle = '652127450935066632';

client.on('message', message => {
	if (message.content.includes('medic')) {
		message.channel.send('TAKE COVER!');
	}

	else if (message.content.includes('take cover')) {
		message.channel.send('MEDIC!');
	}

	else if (message.mentions.users.has(ilona)) {
		message.react('765143640175018005');
	}

	else if (message.mentions.users.has(fisty)) {
		message.react('765160735301959700');
	}

	else if (message.mentions.users.has(wagon)) {
		message.react('765168547235627028');
	}

	else if (message.mentions.users.has(dedle)) {
		message.react('765127132560359444');
	}
});
