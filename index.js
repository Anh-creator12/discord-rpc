const Discord = require('discord.js-selfbot-v11');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Bot is running!'));
app.listen(process.env.PORT || 3000);

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    game: {
      name: 'Minecraft',
      type: 'PLAYING',
    }
  });
});

client.login(process.env.DISCORD_TOKEN);
