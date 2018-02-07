const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '..readme') {
    message.channel.send('```\ntest\n```');
  }
});
client.login(process.env.DISCORD_TOKEN);
