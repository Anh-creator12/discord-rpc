const { Client, RichPresence } = require('discord.js-selfbot-v13');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Web server nhỏ giúp giữ ứng dụng không bị Render ngắt
app.get('/', (req, res) => {
  res.send('Discord RPC is running 24/7!');
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
      .setApplicationId('1545999072903700543') // Client ID của bạn
      .setType('PLAYING') // PLAYING, STREAMING, LISTENING, WATCHING
      .setName('bender')
      .setDetails('bender')
      .setState('bender')
      .setStartTimestamp(Date.now())
      .setAssetsLargeImage('cover') // Key ảnh đại diện đã upload trên Developer Portal
      .setAssetsLargeText('bender');
  };

  client.user.setPresence({ activities: [getPresence()] });
});

// Nhập Discord User Token của bạn vào môi trường biến (Environment Variable) trên Render hoặc dán trực tiếp vào dưới đây
client.login(process.env.MTM2MzUyMTAxOTQxOTE2ODg0OA.G4OGzi.IOwz1ryEaekgtXUdttz_x0PgSpxNLmtNBSVHEk);
