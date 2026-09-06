const { Client, RichPresence } = require('discord.js-selfbot-v13');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Web server giữ cho ứng dụng hoạt động trên cloud
app.get('/', (req, res) => {
  res.send('Discord RPC đang hoạt động 24/7!');
});

app.listen(port, () => {
  console.log(`Server đang lắng nghe tại port ${port}`);
});

const client = new Client();

client.on('ready', async () => {
  console.log(`Đã đăng nhập thành công vào tài khoản: ${client.user.tag}`);

  // Thiết lập Rich Presence
  const getPresence = () => {
    return new RichPresence(client)
      .setApplicationId('154599907290370054')
      .setType('PLAYING')
      .setName('bender')
      .setDetails('bender')
      .setState('bender')
      .setStartTimestamp(Date.now())
      .setAssetsLargeImage('cover')
      .setAssetsLargeText('bender');
  };

  client.user.setPresence({ activities: [getPresence()] });
});

// Đăng nhập an toàn qua biến môi trường
client.login(process.env.DISCORD_TOKEN);
